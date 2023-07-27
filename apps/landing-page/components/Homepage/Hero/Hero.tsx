import * as React from 'react'
import { Header } from '../../common/Header/Header'
import { BackgroundPolygons } from './BackgroundPolygons'
import * as Logos from './Brands'
import Link from 'next/link'

export const Hero = () => {
@ -101,30 +100,6 @@ export const Hero = () => {
          </Box>
        </VStack>
      </Stack>
      <Flex justify="center" bgGradient="linear(to-b, gray.900, gray.800)">
        <VStack spacing="12" pb="32" maxW="7xl" px={4}>
          <Heading fontSize="25px" fontWeight="semibold" data-aos="fade">
            Trusted by Teams and Creators Globally
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            color="gray.400"
            alignItems="center"
            spacing={12}
            fontSize="4xl"
            data-aos="fade"
          >
            <Logos.IbanFirst />
            <Logos.Lemlist />
            <Logos.MakerLead />
            <Logos.Webisharp />
            <Logos.SocialHackrs />
            <Logos.PinpointInteractive />
            <Logos.Obole />
            <Logos.Awwwsome />
          </SimpleGrid>
        </VStack>
      </Flex>
    </Box>
  )
}