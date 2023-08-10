import { Image, IconProps } from '@chakra-ui/react'
import React from 'react'

export const DefaultAvatar = (props: IconProps) => {
  return (
    <Image
      src="https://www.chatworth.io/chatworth-icon.png"
      alt="Default Avatar"
      boxSize="40px"
      borderRadius="full" // This makes the image rounded
      objectFit="cover" // This ensures the image covers the entire container without distortion
      data-testid="default-avatar"
      {...props}
    />
  )
}
