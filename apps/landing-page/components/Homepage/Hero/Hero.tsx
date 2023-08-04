import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react'
import * as React from 'react'
import { Header } from '../../common/Header/Header'
import { BackgroundPolygons } from './BackgroundPolygons'
import Link from 'next/link'

export const Hero = () => {
  return (
    <Box as="section" overflow="hidden">
      <Header />
      <Stack mx="auto" py="10" pos="relative" pb="32" px={[4, 0]}>
        <BackgroundPolygons />
        <VStack mb="20" spacing={20} alignItems="center">
          <VStack pt={['10', '20']} spacing="6" w="full">
            <Heading
              as="h1"
              fontSize={['4xl', '4xl', '5xl', '7xl']}
              textAlign="center"
              maxW="1000px"
              bgGradient="linear(to-r, royalPurple.100, royalPurple.600)"
              bgClip="text"
              data-aos="fade-up"
            >
              Chatworth - AI-Powered Conversational Chatbot System
            </Heading>
            <Text
              fontSize={['lg', 'xl']}
              maxW="800px"
              textAlign="center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Harness the power of AI to create sophisticated chat experiences. Embed Chatworth anywhere on your web/mobile apps and start engaging with your audience like never before.
            </Text>
            <Stack
              direction={['column-reverse', 'row']}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Button
                as={Link}
                href="https://app.chatworth.io/register"
                colorScheme="orange"
                size="lg"
                height="4rem"
                px="2rem"
              >
                Start For Free
              </Button>
            </Stack>
          </VStack>
          <Box maxW="1200px" pos="relative">
            <Box
              pos="absolute"
              left="-40px"
              bgColor="yellow.500"
              boxSize={['150px', '150px', '300px', '600px']}
              rounded="full"
              filter="blur(40px)"
              opacity="0.7"
              className="animated-blob"
              data-aos="fade"
              data-aos-delay="1200"
            />
            <Box
              pos="absolute"
              right="-40px"
              bgColor="royalPurple.500"
              boxSize={['150px', '150px', '300px', '600px']}
              rounded="full"
              filter="blur(40px)"
              opacity="0.7"
              className="animated-blob animation-delay-5000"
              data-aos="fade"
              data-aos-delay="1200"
            />
            <Box
              as="figure"
              shadow="lg"
              data-aos="zoom-out-up"
              data-aos-delay="800"
            >
              <Image
                src="https://s3.typebot.io/builder.png"
                alt="Builder screenshot"
                placeholder="blur"
                style={{ borderRadius: '10px' }}
              />
            </Box>
          </Box>
        </VStack>
      </Stack>
    </Box>
  )
}