import {
  chakra,
  Tooltip,
  Text,
  Button,
  HStack,
  Stack,
  Link,
} from '@chakra-ui/react'
import { HelpCircleIcon } from 'assets/icons/HelpCircleIcon'
import { Plan } from '@typebot.io/prisma'
import React from 'react'
import { PricingCard } from './PricingCard'
import { prices, seatsLimits } from '@typebot.io/lib/billing/constants'

// Assuming the missing variables are part of the Props
type Props = {
  onChatsTiersClick: () => void
  selectedChatsLimitIndex?: number; // Assuming optional prop
  selectedStorageLimitIndex?: number; // Assuming optional prop
  isYearly?: boolean; // Assuming optional prop
}

// Adding the missing variables as props to the function component
export const ProPlanCard = ({
  onChatsTiersClick,
  selectedChatsLimitIndex = 10000, // Default value or replace with actual logic to determine this
  selectedStorageLimitIndex = 1, // Default value or replace with actual logic to determine this
  isYearly = false, // Default value or replace with actual logic to determine this
}: Props) => (
  <PricingCard
    data={{
      price: prices.PRO,
      name: 'Pro',
      featureLabel: 'Everything in Personal, plus:',
      features: [
        <Text key="seats">
          <chakra.span fontWeight="bold">{seatsLimits.PRO} seats</chakra.span>{' '}
          included
        </Text>,
        <Stack key="chats" spacing={0}>
          <HStack spacing={1.5}>
            <Text>10,000 chats/mo</Text>
            <Tooltip
              hasArrow
              placement="top"
              label="A chat is counted whenever a user starts a discussion. It is independent of the number of messages he sends and receives."
            >
              <chakra.span cursor="pointer" h="7">
                <HelpCircleIcon />
              </chakra.span>
            </Tooltip>
          </HStack>
          <Text fontSize="sm" color="gray.400">
            Extra chats:{' '}
            <Button
              variant="outline"
              size="xs"
              colorScheme="gray"
              onClick={onChatsTiersClick}
            >
              <chakra.span cursor="pointer" h="7">
                <HelpCircleIcon />
              </chakra.span>
            </Button>
          </Text>
        </Stack>,
        'Custom domains',
        'In-depth analytics',
      ],
    }}
    borderWidth="3px"
    borderColor="blue.200"
    button={
      <Button
        as={Link}
        href={`https://chatworth.io/register?subscribePlan=${Plan.PRO}&chats=${selectedChatsLimitIndex}&storage=${selectedStorageLimitIndex}&isYearly=${isYearly}`}
        colorScheme="blue"
        size="lg"
        w="full"
        fontWeight="extrabold"
        py={{ md: '8' }}
      >
        Subscribe now!
      </Button>
    }
  />
)

export default ProPlanCard;
