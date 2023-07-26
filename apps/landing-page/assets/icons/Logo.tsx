import Icon, { IconProps } from '@chakra-ui/icon'
import React from 'react'
import Image from 'next/image'

export const Logo = () => (
  <Image src={'/chatworth-icon.png'} width={90} height={90} alt="chatworth logo" />
)
