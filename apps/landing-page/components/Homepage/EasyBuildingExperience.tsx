import {
  Flex,
  Stack,
  Heading,
  Box,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import { ArrowRight } from 'assets/icons/ArrowRight'
import { Flare } from 'assets/illustrations/Flare'
import Link from 'next/link'

export const EasyBuildingExperience = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="blue"
        pos="absolute"
        left="-200px"
        top="-50px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: '1000px' }}
        pt={'52'}
        w="full"
        px="4"
        spacing={12}
        direction={['column', 'row-reverse']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, '300px']}>
          <Heading as="h1" data-aos="fade">
            Effortless Building Experience
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
Design your chatbot using Chatworth&apos;s intuitive drag-and-drop interface. For unique brand and functional needs, our system accommodates custom code and integrations, allowing for a tailored and flexible chatbot experience</Text> 
<Flex>
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://app.chatworth.io/register`}
              variant="ghost"
              data-aos="fade"
            >
              Try it now
            </Button>
          </Flex>
        </Stack>
        <Box rounded="lg" data-aos="fade" borderWidth="3px" borderColor="royalPurple.500">
          <Image
            src="/easy-build.png"
            alt="incomplete results illustration"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  )
}