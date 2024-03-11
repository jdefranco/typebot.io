import React, { useEffect, useRef, useState } from 'react';
import { Flex, Stack, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Standard } from '@typebot.io/react';
import { ArrowRight } from 'assets/icons/ArrowRight';
import { PublicTypebot } from '@typebot.io/schemas';
import { sendRequest } from '@typebot.io/lib';

const nameBlockId = 'cc313ogcesbikz61f5c5scsm';
const messageBlockId = 'qqbm08tbeorqisluz3g99bq8';

export const RealTimeResults = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [, setTypebot] = useState<PublicTypebot | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchTemplate = async () => {
        const { data, error } = await sendRequest(`/typebots/realtime-airtable.json`);
        if (error) return;
        setTypebot(data as PublicTypebot);
      };

      fetchTemplate();
    }
  }, []);

  const refreshIframeContent = () => {
    iframeRef.current?.contentWindow?.location.reload();
  };

  const handleAnswer = ({ blockId }: { blockId: string }) => {
    if ([nameBlockId, messageBlockId].includes(blockId)) {
      setTimeout(refreshIframeContent, 1000);
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
      <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8" align="center">
        <Standard
          typebot="my-typebot-orp4iiy" // This is the correct prop name as per the latest instruction.
          onAnswer={handleAnswer}
          style={{ width: '100%', height: '400px' }}
        />
        <iframe
          ref={iframeRef}
          src="https://airtable.com/embed/app19rMMlM3AunNmT/shraPEcx5DKCdudmF?backgroundColor=cyan"
          frameBorder="0"
          width="100%"
          height="533"
          style={{ background: 'transparent', border: '1px solid #ccc', borderRadius: '8px' }}
          title="Real-Time Airtable View"
        ></iframe>
      </Stack>
    </Flex>
  );
};
