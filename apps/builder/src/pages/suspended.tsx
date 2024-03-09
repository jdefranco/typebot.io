import { TextLink } from '@/components/TextLink'
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { Heading, Text, VStack, Link } from '@chakra-ui/react' // Added Link import
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page() {
  const { replace } = useRouter()
  const { workspace } = useWorkspace()

  useEffect(() => {
    if (!workspace || workspace.isSuspended) return
    replace('/typebots')
  }, [replace, workspace])

  return (
    <>
      <DashboardHeader />
      <VStack
        w="full"
        h="calc(100vh - 64px)"
        justifyContent="center"
        spacing={4}
      >
        <Heading>Your workspace has been suspended.</Heading>
        <Text>
          We detected that one of your typebots does not comply with our{' '}
          <TextLink
            href="https://chatworth.io/terms-of-service#scam-typebots"
            isExternal
          >
            terms of service
          </TextLink>
        </Text>
        <Text>
          If you think it&apos;s a mistake, feel free to{' '}
          <Link href="mailto:support@chatworth.io" textDecor="underline">
            reach out
          </Link>
          .
        </Text>
      </VStack>
    </>
  )
}
