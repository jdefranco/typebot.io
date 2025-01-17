import { Flex, Stack, Heading, Box, Text, Button } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'assets/icons/ArrowRight';
import { Flare } from 'assets/illustrations/Flare';
import Link from 'next/link';

export const EasyBuildingExperience = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="blue"
        pos="absolute"
        left="-200px"
        top="-50px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: '1000px' }}
        pt={'52'}
        w="full"
        px="4"
        spacing={12}
        direction={['column', 'row-reverse']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, '300px']}>
          <Heading as="h1" data-aos="fade">
            Effortless Building Experience
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
            With Chatworth, craft dynamic chatbots using a rich set of modules. From text bubbles, audio, and video to diverse inputs like email, date, and payment. All designed for an engaging user interaction.
          </Text>
          <Flex>
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://app.chatworth.io/register`}
              variant="ghost"
              data-aos="fade"
            >
              Try it now
            </Button>
          </Flex>
        </Stack>
        <Box 
          data-aos="fade"
          position="relative"
          p="4px"
          borderWidth="4px"
          borderColor="royalPurple.300"
          bg="#EFEFEF"
          rounded="xl"
        >
          <Image
            src="/easy-build.png"
            alt="incomplete results illustration"
            placeholder="blur"
            width={1000}  // Adjust this value to the actual width of your image
            height={1000}  // Adjust this value to the actual height of your image
          />
        </Box>
      </Stack>
    </Flex>
  );
}
