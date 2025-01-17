import { Flex, Stack, Heading, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'assets/icons/ArrowRight'
import { Flare } from 'assets/illustrations/Flare'
import Link from 'next/link'

export const EasyEmbed = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="orange"
        pos="absolute"
        right="-200px"
        top="100px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: '1000px' }}
        pt={32}
        w="full"
        px="4"
        spacing={12}
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, '300px']}>
          <Heading as="h1" data-aos="fade">
            Flexible Integration Across Multiple Platforms
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
            Incorporating Chatworth into your digital platforms is straightforward and efficient. With a diverse range of embedding options, from WordPress and Shopify to Wix and Notion, we ensure a seamless experience tailored to your specific needs.
          </Text>
          <Flex data-aos="fade">
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://app.chatworth.io/register`}
              variant="ghost"
              colorScheme="yellow"
            >
              Try it now
            </Button>
          </Flex>
        </Stack>
        <Box 
          data-aos="fade"
          position="relative"
          p="4px"  // This will act as the border width
          borderWidth="4px"  // Border width
          borderColor="yellow.200"  // Border color
          bg="#FFFFFF" 
          rounded="xl"  // Border radius for the box
        >
          <Image
            src="/easy-embed.png"
            alt="incomplete results illustration"
            placeholder="blur"
            width={500}  // Adjust this value based on your image's aspect ratio
            height={500}  // Adjust this value based on your image's aspect ratio
          />
        </Box>
      </Stack>
    </Flex>
  )
}
