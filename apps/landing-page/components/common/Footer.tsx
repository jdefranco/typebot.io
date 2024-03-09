import React, { ReactNode } from 'react'
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { Logo } from 'assets/icons/Logo'
import { TextLink } from './TextLink'

const typebotLinkedInUrl = 'https://www.linkedin.com/company/chatworth'
const typebotTwitterUrl = 'https://twitter.com/chatworth'
const statusPageUrl = 'https://status.chatworth.io'
const roadmapLink = 'https://app.chatworth.io/feedback'
const documentationLink = 'https://docs.chatworth.io'
const githubRepoLink = 'https://github.com/jdefranco/typebot.io'

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={'1000px'} py={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={8} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Logo />
              <Heading as="p" fontSize="lg">
                Chatworth
              </Heading>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <TextLink href={statusPageUrl} isExternal>
              Status
            </TextLink>
            <TextLink href={documentationLink} isExternal>
              Documentation
            </TextLink>
            <TextLink href={roadmapLink} isExternal>
              Roadmap
            </TextLink>
            <TextLink href={'/pricing'}>Pricing</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Community</ListHeader>
            <TextLink href={facebookGroupUrl} isExternal>
              Facebook Group
            </TextLink>
            <TextLink href={githubRepoLink} isExternal>
              GitHub repository
            </TextLink>
            <TextLink href={typebotTwitterUrl} isExternal>
              Twitter
            </TextLink>
            <TextLink href={typebotLinkedInUrl} isExternal>
              LinkedIn
            </TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <TextLink href="/about">About</TextLink>
            <TextLink href="mailto:mail@chatworth.io">Contact</TextLink>
            <TextLink href={'/terms-of-service'}>Terms of Service</TextLink>
            <TextLink href={'/privacy-policies'}>Privacy Policy</TextLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Heading fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Heading>
  )
}
