import { Heading, VStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export const Faq = () => (
  <VStack w="full" spacing="10">
    <Heading textAlign="center">Frequently asked questions</Heading>
    <SimpleGrid columns={[1, 2]} spacing={10}>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          What is considered a monthly chat?
        </Heading>
        <Text>
  A chat is counted whenever a user initiates a conversation. This count is independent of the number of messages sent and received. For instance, if a user starts a chat and sends 10 messages to the bot, it will count as 1 chat. If the user chats again later and their session is remembered, it won&apos;t be counted as a new chat. <br />
  <br />
  Think of it this way: 1 chat equals to a row in your Results table.  
</Text>

      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          What happens once I reach the monthly chats limit?
        </Heading>
        <Text>
          You will receive a notification email when you reach 80% of your monthly limit. Once you have reached the limit, you will receive another email alert. Your bots will continue to operate. You will be kindly asked to upgrade your subscription. If you do not respond after approximately 48 hours, your bots will be deactivated for the remainder of the month. For a FREE workspace, if you exceed 600 chats, your bots will be automatically deactivated.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          What is considered as storage?
        </Heading>
        <Text>
          Storage is accumulated for every file that your user uploads into your bot. If you delete the associated result, it will free up the used space.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          What happens once I reach the storage limit?
        </Heading>
        <Text>
          When you exceed the storage size included in your plan, you will receive a notification email. There won&apos;t be any immediate additional charges and your bots will continue to store new files. If you continue to exceed the limit, you will be kindly asked to upgrade your subscription.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          Can I cancel or change my subscription any time?
        </Heading>
        <Text>
          Yes, you can cancel, upgrade, or downgrade your subscription at any time. There is no minimum time commitment or lock-in.
          <br />
          <br />
          When you upgrade or downgrade your subscription, you&apos;ll get access to the new options right away. Your next invoice will have a prorated amount.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          Do you offer annual payments?
        </Heading>
        <Text>
          Yes. Starter and Pro plans can be purchased with monthly or annual billing.
          <br />
          <br />
          Annual plans are cheaper and give you about a 16% discount compared to monthly payments. Enterprise plans are only available with annual billing.
        </Text>
      </Stack>
    </SimpleGrid>
  </VStack>
)
