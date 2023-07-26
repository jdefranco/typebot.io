import Icon, { IconProps } from '@chakra-ui/icon'
import React from 'react'
import Image from 'next/image'

export const Logo = () => (
  <Image src={'/chatworth-icon.png'} width={30} height={30} alt="chatworth logo" />
)
