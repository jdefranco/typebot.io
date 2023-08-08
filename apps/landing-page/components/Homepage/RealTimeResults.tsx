import { Flex, Stack, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Standard } from '@typebot.io/react';
import { ArrowRight } from 'assets/icons/ArrowRight';
import { HandDrawnArrow } from 'assets/illustrations/HandDrawnArrow';
import Link from 'next/link';
import { PublicTypebot, Typebot } from '@typebot.io/schemas'
import React, { useEffect, useRef, useState } from 'react';
import { sendRequest } from '@typebot.io/lib';

const nameBlockId = 'cc313ogcesbikz61f5c5scsm';
const messageBlockId = 'qqbm08tbeorqisluz3g99bq8';

export const RealTimeResults = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [typebot, setTypebot] = useState<PublicTypebot>();
  const [isLoading, setIsLoading] = useState(false); // State for loading placeholder

  const fetchTemplate = async () => {
    const { data, error } = await sendRequest(`/typebots/realtime-airtable.json`);
    if (error) return;
    const typebot = data as Typebot;
    setTypebot({ ...typebot, typebotId: typebot.id } as PublicTypebot);
  };

  useEffect(() => {
    fetchTemplate();
  }, []);

  const refreshIframeContent = () => {
    if (!iframeRef.current) return;
    setIsLoading(true);
    iframeRef.current.onload = () => setIsLoading(false);
    iframeRef.current.src += '';
  };

  const handleAnswer = ({ blockId }: { blockId: string }) => {
    if ([nameBlockId, messageBlockId].includes(blockId))
      setTimeout(refreshIframeContent, 1000);
  };

  return (
    <Flex as="section" justify="center">
      <Stack
        style={{ maxWidth: '1200px' }}
        pt={'52'}
        w="full"
        px="4"
        spacing={16}
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack spacing={6}>
          {/* ... rest of your code for the heading and button ... */}
        </VStack>

        <Stack w="full" direction={['column', 'row']} spacing="4" data-aos="fade">
          {typebot && (
            <Standard
              typebot={typebot.typebotId} // Ensure the typebot ID is passed correctly
              apiHost="https://bot.chatworth.io"
              onAnswer={handleAnswer}
              style={{
                borderRadius: '0.375rem',
                borderWidth: '1px',
                width: '100%', // Ensure full width
                height: '533px',
              }}
            />
          )}
          <div style={{ position: 'relative', width: '100%' }}> {/* Ensure full width */}
            <iframe
              ref={iframeRef}
              src="https://airtable.com/embed/app19rMMlM3AunNmT/shraPEcx5DKCdudmF?backgroundColor=cyan"
              width="100%"
              height="533"
              style={{
                borderRadius: '0.5rem',
                border: 'none',
                backgroundColor: 'white',
              }}
            />
            {isLoading && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)' // semi-transparent white
              }}>
                Loading...
              </div>
            )}
          </div>
          <Flex
            top="-60px"
            right="-30px"
            pos="absolute"
            display={{ base: 'none', xl: 'flex' }}
          >
            <Text fontFamily="'Indie Flower'" fontSize="2xl">
              It&apos;s a real Airtable view!
            </Text>
            <HandDrawnArrow
              transform="rotate(30deg)"
              boxSize="100px"
              top="15px"
              right="-60px"
              pos="absolute"
            />
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
