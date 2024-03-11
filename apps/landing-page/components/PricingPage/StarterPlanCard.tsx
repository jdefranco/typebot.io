import { chakra, Tooltip, Text, HStack, Button, Stack } from '@chakra-ui/react';
import { HelpCircleIcon } from 'assets/icons/HelpCircleIcon';
import { Plan } from '@typebot.io/prisma';
import React from 'react';
import { PricingCard } from './PricingCard';
import { prices, seatsLimits } from '@typebot.io/lib/billing/constants';

// Define the Props type to include the new props
type Props = {
  selectedChatsLimitIndex?: number; // Assuming optional prop
  selectedStorageLimitIndex?: number; // Assuming optional prop
  isYearly?: boolean; // Assuming optional prop
};

// Update the component to accept props
export const StarterPlanCard = ({
  selectedChatsLimitIndex = 2000, // Default value or replace with actual logic
  selectedStorageLimitIndex = 1, // Default value or replace with actual logic
  isYearly = false, // Default value or replace with actual logic
}: Props) => {
  return (
    <PricingCard
      data={{
        price: prices.STARTER,
        name: 'Starter',
        featureLabel: 'Everything in Personal, plus:',
        features: [
          <Text key="seats">
            <chakra.span fontWeight="bold">{seatsLimits.STARTER} seats</chakra.span> included
          </Text>,
          <Stack key="chats" spacing={0}>
            <HStack spacing={1.5}>
              <Text>2,000 chats/mo</Text>
              <Tooltip
                hasArrow
                placement="top"
                label="A chat is counted whenever a user starts a discussion. It is independent of the number of messages he sends and receives. "
              >
                <chakra.span cursor="pointer" h="7">
                  <HelpCircleIcon />
                </chakra.span>
              </Tooltip>
            </HStack>
            <Text fontSize="sm" color="gray.400">
              Extra chats: $10 per 500
            </Text>
          </Stack>,
          'Branding removed',
          'Collect files from users',
          'Create folders',
          'Direct priority support',
        ],
      }}
      borderWidth="1px"
      borderColor="orange.200"
      button={
        <Button
          as="a" // Use 'a' tag for external links
          href={`https://chatworth.io/register?subscribePlan=${Plan.STARTER}&chats=${selectedChatsLimitIndex}&storage=${selectedStorageLimitIndex}&isYearly=${isYearly}`}
          colorScheme="orange"
          size="lg"
          w="full"
          fontWeight="extrabold"
          py={{ md: '8' }}
          variant="outline"
        >
          Subscribe now
        </Button>
      }
    />
  );
};

export default StarterPlanCard;
