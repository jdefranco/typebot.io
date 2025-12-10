import React, { useCallback, useEffect, useState } from 'react';
import { Flex, Stack, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Standard } from '@typebot.io/react';
import { ArrowRight } from 'assets/icons/ArrowRight';
import { PublicTypebot } from '@typebot.io/schemas';
import { sendRequest } from '@typebot.io/lib';

const nameBlockId = 'cc313ogcesbikz61f5c5scsm';
const messageBlockId = 'qqbm08tbeorqisluz3g99bq8';

const AIRTABLE_EMBED_URL =
  'https://airtable.com/embed/app19rMMlM3AunNmT/shraPEcx5DKCdudmF?backgroundColor=cyan';

export const RealTimeResults = () => {
  const [, setTypebot] = useState<PublicTypebot | null>(null);
  const [iframeKey, setIframeKey] = useState(0);

  // Simple helper to force the iframe to reload by remounting it
  const refreshIframeContent = useCallback(() => {
    setIframeKey((prev) => prev + 1);
  }, []);

  // Optional: warm up the Typebot template so it responds faster
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fetchTemplate = async () => {
      const { data, error } = await sendRequest(`/typebots/realtime-airtable.json`);
      if (error) return;
      setTypebot(data as PublicTypebot);
    };

    fetchTemplate();
  }, []);

  // 🔔 Listen for Chatworth postMessage events
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMessage = (event: MessageEvent) => {
      const { data } = event;
      if (!data || typeof data !== 'object') return;

      const payload = data as { from?: string; action?: string };

      if (payload.from === 'chatworth' && payload.action === 'refresh-airtable') {
        // Short delay so Airtable has time to write the new record
        setTimeout(() => {
          refreshIframeContent();
        }, 500);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [refreshIframeContent]);

  // Still keep the Typebot block-based refresh in case you want to use it as well
  const handleAnswer = ({ blockId }: { blockId: string }) => {
    if ([nameBlockId, messageBlockId].includes(blockId)) {
      setTimeout(() => {
        refreshIframeContent();
      }, 1000);
    }
  };

  return (
    <Flex as="section" justify="center" align="center" flexDirection="column" py="12">
      <VStack spacing={6} align="center">
        <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
          Experience Real-Time Results
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
          See how your responses are reflected instantly in an external system.
        </Text>
        <Button
          as="a"
          href="https://app.chatworth.io/register"
          rightIcon={<ArrowRight />}
          colorScheme="blue"
          variant="solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try it now
        </Button>
      </VStack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing="4"
        mt="8"
        align="center"
        w="full"
        maxW="1200px"
      >
        <Standard
          typebot="my-typebot-orp4iiy"
          onAnswer={handleAnswer}
          style={{ width: '100%', height: '400px' }}
        />

        <iframe
          key={iframeKey}
          src={AIRTABLE_EMBED_URL}
          frameBorder="0"
          width="100%"
          height="533"
          style={{
            background: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
          title="Real-Time Airtable View"
        ></iframe>
      </Stack>
    </Flex>
  );
};
