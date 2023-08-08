import { Flex, Stack, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { ArrowRight } from 'assets/icons/ArrowRight';
import { HandDrawnArrow } from 'assets/illustrations/HandDrawnArrow';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export const RealTimeResults = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
    // Listener for the postMessage event
    window.addEventListener('message', function(event) {
        console.log("Received message:", event.data); // Log any received message

        // Check if the received message is the one we're expecting
        if (event.data === 'submission_complete') {
            // Refresh the Airtable iframe
            if (iframeRef.current) {
                iframeRef.current.src += '';
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
                        Conversational Data Capture Beyond Boundaries
                    </Heading>
                    <Text
                        textAlign="center"
                        color="gray.400"
                        maxW="1000px"
                        fontSize={{ base: 'lg', xl: 'xl' }}
                        data-aos="fade"
                    >
                        Traditional web forms have their place, but with Chatworth, data collection becomes a dynamic conversation. Seamlessly capture information in real-time and integrate it across a multitude of platforms, ensuring every valuable interaction is effectively utilized.
                    </Text>
                    <Flex>
                        <Button
                            as={Link}
                            rightIcon={<ArrowRight />}
                            href={`https://app.chatworth.io/register`}
                            variant="ghost"
                            colorScheme="royalPurple"
                            data-aos="fade"
                        >
                            Get Started
                        </Button>
                    </Flex>
                </VStack>

                <Stack
                    w="full"
                    direction={['column', 'row']}
                    spacing="4"
                    data-aos="fade"
                >
                    <iframe
                        src="https://bot.chatworth.io/my-typebot-orp4iiy"
                        width="100%"
                        height="533"
                        style={{
                            borderRadius: '0.5rem',
                            border: 'none',
                            backgroundColor: 'white',
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
