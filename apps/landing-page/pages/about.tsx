import { Stack, Text, Box, Flex, Heading } from '@chakra-ui/react'
import { Header } from 'components/common/Header/Header'
import { SocialMetaTags } from 'components/common/SocialMetaTags'
import React from 'react'
import selfie from '../public/images/selfie.png'
import Image from 'next/image'
import { Footer } from 'components/common/Footer'

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden ">
      <Header />
      <SocialMetaTags currentUrl={`https://www.chatworth.io/about`} />
      <Stack
        spacing={10}
        mx="auto"
        maxW="3xl"
        my="20"
        fontSize="17px"
        textAlign="justify"
      >
        <Flex w="full">
          <Heading as="h1">Chatworth&apos;s story</Heading>
        </Flex>

        <Text>
          Chatworth is an AI-powered chatbot system designed to revolutionize the way businesses interact with their customers. Our sophisticated platform enables businesses of all sizes to create unique, engaging, and intelligent chat experiences.
        </Text>
        <Flex w="full" justify="center">
          <Box as="figure" maxW="200px">
            <Image src="https://chatworth.io/chatworth-icon.png" alt="Chatworth Icon" />
          </Box>
        </Flex>

        <Text>
          Our journey began with a simple idea: to make customer interactions more personal, efficient, and insightful. We recognized the potential of AI in transforming these interactions and set out to create a platform that could harness this power. The result was Chatworth, a product of 4567 Labs, that combines the sophistication of AI with the simplicity of intuitive design.
        </Text>

        <Text>
          Chatworth is built upon the robust and open-source Typebot platform, a testament to the collective wisdom of developers and creators worldwide. This open-source foundation not only ensures transparency and reliability but also empowers us to offer a diverse array of features and capabilities. From the simplicity of creating chatbots through drag-and-drop functionality to the seamless integration across various platforms, Chatworth embodies the spirit of open-source by promoting adaptability, innovation, and user-centric design.
        </Text>
        <Text>
          Our mission is to help businesses communicate more effectively with their customers. We believe that every interaction is an opportunity to learn, improve, and build stronger relationships. With Chatworth, businesses can make the most of these opportunities.
        </Text>
        <Text>
          Whether you&apos;re a solo entrepreneur looking to automate customer support, a growing startup aiming to generate leads, or a large corporation seeking to enhance customer satisfaction, Chatworth is here to help. Our flexible plans are designed to fit your needs.
        </Text>
        <Text>
          Join us on our mission to transform customer interactions. Experience the wisdom of Chatworth today.
        </Text>
        
      </Stack>
      <Footer />
    </div>
  )
}

export default AboutPage