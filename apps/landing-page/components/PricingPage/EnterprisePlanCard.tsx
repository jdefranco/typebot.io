import {
  Stack,
  Heading,
  Button,
  List,
  ListItem,
  ListIcon,
  Text,
  Link,
} from '@chakra-ui/react'
import { CheckCircleIcon } from 'assets/icons'

export const EnterprisePlanCard = () => (
  <Stack
    direction={['column', 'row']}
    align="center"
    p="10"
    rounded="lg"
    bgColor="gray.800"
    borderWidth="2px"
    spacing={10}
  >
    <Stack maxW="300px" spacing={4}>
      <Heading fontSize="xl">Enterprise</Heading>
      <Text>
        Perfect for large corporations aiming to generate leads and automate customer support on a large scale.
      </Text>
      <Text fontSize="lg">
        <Button
          as={Link}
          href="https://typebot.io/enterprise-lead-form"
          isExternal
          variant="outline"
        >
          Get a quote
        </Button>
      </Text>
    </Stack>
    <Stack flex="1">
      <List spacing="4">
        <ListItem fontWeight="medium" display="flex" alignItems="center">
          <ListIcon fontSize="xl" as={CheckCircleIcon} marginEnd={2} />
          Custom chat limits & seats for your entire team
        </ListItem>
        <ListItem fontWeight="medium" display="flex" alignItems="center">
          <ListIcon fontSize="xl" as={CheckCircleIcon} marginEnd={2} />
          SSO & Detailed access rights
        </ListItem>
        <ListItem fontWeight="medium" display="flex" alignItems="center">
          <ListIcon fontSize="xl" as={CheckCircleIcon} marginEnd={2} />
          Annual contract with a dedicated support representative
        </ListItem>
      </List>
    </Stack>
  </Stack>
)
