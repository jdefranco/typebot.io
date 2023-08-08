import { Flex, Stack, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Standard } from '@chatworth.io/react'; // Assuming Chatworth provides a similar React component
import { ArrowRight } from 'assets/icons/ArrowRight';
import { HandDrawnArrow } from 'assets/illustrations/HandDrawnArrow';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export const RealTimeResults = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        // Listener for the postMessage event
        window.addEventListener('message', function(event) {
            // Check if the received message is the one we're expecting
            if (event.data && event.data.from === 'chatworth' && event.data.action === 'refresh-airtable') {
                console.log("Refreshing Airtable iframe.");
                // Refresh the Airtable iframe
                if (iframeRef.current) {
                    const currentSrc = iframeRef.current.src;
                    iframeRef.current.src = '';
                    iframeRef.current.src = currentSrc;
                }
            }
        });
    }, []);

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
                    <Heading
                        fontSize={{ base: '4xl', xl: '6xl' }}
                        textAlign="center"
                        data-aos="fade"
                    >
                        Real-Time Data Collection, Enlightened by AI
                    </Heading>
                    <Text
                        textAlign="center"
                        color="gray.400"
                        maxW="1000px"
                        fontSize={{ base: 'lg', xl: 'xl' }}
                        data-aos="fade"
                    >
                        The power of a chat application lies in its ability to gather data in real-time. With Chatworth, you not only collect data but also gain insights, ensuring no valuable information is lost in the ether.
                    </Text>
                    <Flex>
                        <Button
                            as={Link}
                            rightIcon={<ArrowRight />}
                            href={`https://app.chatworth.io/register`}
                            variant="ghost"
                            colorScheme="blue"
                            data-aos="fade"
                        >
                            Try it now
                        </Button>
                    </Flex>
                </VStack>

                <Stack
                    w="full"
                    direction={['column', 'row']}
                    spacing="4"
                    data-aos="fade"
                >
                    <Standard
                        typebot="airtable-real-time"
                        apiHost="https://chatworth.io" // Update this to the correct Chatworth API endpoint
                        onAnswer={handleAnswer}
                        style={{
                            borderRadius: '0.375rem',
                            borderWidth: '1px',
                            height: '533px',
                        }}
                    />
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
};
