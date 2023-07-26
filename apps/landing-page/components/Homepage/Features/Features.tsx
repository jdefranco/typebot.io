import React from 'react'
import {
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FeatureCard } from './FeatureCard'
import { FolderIcon } from 'assets/icons/FolderIcon'
import { AccessibilityIcon } from 'assets/icons/AccessibilityIcon'
import { CalculatorIcon } from 'assets/icons/CaluclatorIcon'
import { ConditionIcon } from 'assets/icons/ConditionIcon'
import { PersonAddIcon } from 'assets/icons/PersonAddIcon'
import { ShareIcon } from 'assets/icons/ShareIcon'

const features = [
  {
    Icon: AccessibilityIcon,
    title: 'Hidden fields',
    content:
      'Segment your users effectively by including data in your chatbot URL, utilizing this information directly within your chatbot.',
  },
  {
    Icon: PersonAddIcon,
    title: 'Team collaboration',
    content: 'Invite your colleagues to collaborate on your chatbots, enhancing synergy and shared expertise.',
  },
  {
    Icon: ConditionIcon,
    title: 'Link to sub chatbots',
    content: 'Reuse your chatbots in different parent bots, maximizing efficiency and consistency.',
  },
  {
    Icon: CalculatorIcon,
    title: 'Custom code',
    content: 'Personalize your chatbot with your own Javascript & CSS code, to meet your specific needs.',
  },
  {
    Icon: ShareIcon,
    title: 'Custom domain',
    content: 'Connect your chatbot to a custom URL of your choice, ensuring a seamless brand experience.',
  },
  {
    Icon: FolderIcon,
    title: 'Folder management',
    content:
      'Organize your chatbots in specific folders, maintaining a clean workspace and facilitating collaboration with multiple clients.',
  },
]

export const Features = () => {
  return (
    <Flex justifyContent="center">
      <Stack
        style={{ maxWidth: '1200px' }}
        pt={'52'}
        w="full"
        px="4"
        spacing={12}
      >
        <VStack>
          <Heading as="h1" textAlign="center" data-aos="fade">
            Powerful Features, Crafted with Precision
          </Heading>
          <Text
            color="gray.500"
            fontSize={['lg', 'xl']}
            textAlign="center"
            data-aos="fade"
          >
Chatworth simplifies chatbot building while offering a suite of powerful features:          </Text>
        </VStack>
        <SimpleGrid columns={[1, 3]} spacing="10" pt="10" data-aos="fade">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}
