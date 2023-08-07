import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { DontIcon } from 'assets/icons/DontIcon'
import { DoIcon } from 'assets/icons/DoIcon'
import { HandDrawnArrow } from 'assets/illustrations/HandDrawnArrow'

export const IntroducingChatApps = () => {
  return (
    <Flex as="section" justify="center">
      <Stack
        style={{ maxWidth: '1200px' }}
        pt={32}
        w="full"
        px="4"
        spacing={16}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing={6} w="full">
          <Heading
            fontSize={{ base: '3xl', lg: '5xl', xl: '6xl' }}
            textAlign="center"
            data-aos="fade"
          >
            Replace your traditional forms with Chatworth
          </Heading>
          <Text
            textAlign="center"
            fontSize={{ base: 'lg', xl: 'xl' }}
            color="gray.400"
            data-aos="fade"
          >
            Our AI-powered chatbot system not only enhances customer satisfaction and retention but also triples your conversion rate compared to conventional forms.
          </Text>
        </Stack>

        <Stack
          direction={['column', 'row']}
          w="full"
          spacing="6"
          data-aos="fade"
        >
          <Stack spacing={6} flex="1" align={['flex-start', 'center']}>
            <DontIcon />
            <FakeLeadGenForm />
          </Stack>

          <Stack
            spacing={6}
            flex="1"
            h="full"
            pos="relative"
            align={['flex-start', 'center']}
          >
            <DoIcon />
            <iframe 
              src="https://bot.chatworth.io/chatworth-ai-a8up210" 
              width="100%" 
              height="562px" 
              frameborder="0"
              style={{
                borderRadius: '0.375rem',
                borderWidth: '1px',
              }}
            ></iframe>
            <Flex top="-20px" right="40px" pos="absolute">
              <Text fontFamily="'Indie Flower'" fontSize="2xl">
                Try it out!
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
      </Stack>
    </Flex>
  )
}

const FakeLeadGenForm = () => (
  <Stack borderWidth="1px" spacing="4" padding="6" rounded="md" w="full">
    <FormControl isRequired>
      <FormLabel htmlFor="full-name">Full name</FormLabel>
      <Input id="full-name" placeholder="Full name" />
    </FormControl>
    <FormControl isRequired>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" placeholder="Email" />
    </FormControl>
    <FormControl isRequired>
      <FormLabel htmlFor="services">
        What services are you interested in? 
      </FormLabel>
      <Stack>
        <Checkbox>Website Dev</Checkbox>
        <Checkbox>Content Marketing</Checkbox>
        <Checkbox>Social Media</Checkbox>
        <Checkbox>UX/UI Design</Checkbox>
      </Stack>
    </FormControl>
    <FormControl isRequired>
      <FormLabel htmlFor="info">Additional Information</FormLabel>
      <Textarea id="info" placeholder="Additional Information" />
    </FormControl>
    <Flex>
      <Button>Submit</Button>
    </Flex>
  </Stack>
)
