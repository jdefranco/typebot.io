import { Image, ImageProps } from '@chakra-ui/react'
import React from 'react'

export const DefaultAvatar = (props: ImageProps) => {
  return (
    <Image
      src="https://www.chatworth.io/chatworth-icon.png"
      alt="Default Avatar"
      boxSize="40px"
      borderRadius="full"
      objectFit="cover"
      {...props}
    />
  )
}
