import { Box, Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

export const DefaultAvatar = (props: IconProps) => {
  return (
    <Box cursor="pointer" _hover={{ filter: 'brightness(0.9)' }}>
      <Icon
        viewBox="0 0 155 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        boxSize="40px"
        data-testid="default-avatar"
        {...props}
      >
<path d="M136.1 3.1c-16.5 7.3-27.4 9.2-54.6 9.4-15.6.1-24.6.5-28 1.4-7.3 2-16.3 6.3-21.5 10.2-2.5 1.9-6.9 4.9-9.8 6.8C10.9 38.1 4.6 49.7 2.9 66.6.5 89.1 1.5 97.9 8.2 111.9c6.8 14.2 22.9 28.3 39.2 34.2 2.8 1 4.4 1.8 3.5 1.9-2.3 0-4 2.3-3 3.9.7 1.1 1.8 1.1 6.1.1 6.7-1.6 42-1.6 48 0 3.1.8 4.5.8 5.6-.1 1.7-1.4.2-3.9-2.5-4-.9 0 1.2-1 4.5-2.3 8.6-3.2 22.3-12.5 28.4-19.4 5.9-6.7 12.3-19 14.6-28.1 1.7-6.9 1.6-19.3-.5-35.8-1.5-12.7-8.1-24.5-17-30.6l-2.5-1.6 5.6-5.9c9-9.4 12.1-17.8 8-21.5-2.4-2.1-4.6-2-10.1.4zm-85.6 29c10.9 2 20.3 8.5 25 17.3 1.1 2 2.2 3.6 2.6 3.6.4 0 1.2-1.4 1.9-3.1.7-1.7 3.4-5.2 5.9-7.8 16.8-17.2 45-12.8 55.6 8.6 4 8.1 4.6 19.4 1.5 27.5-8 21.2-35.3 28.2-52.7 13.4-3.1-2.6-3.1-2.7-1.7-6.1 1.3-3.1 1.3-3.8-.1-5.9-2.2-3.3-9-5.9-13.2-5.1-4 .7-9.3 5-9.3 7.5 0 1.1.5 3.1 1.2 4.5 1.1 2.4.9 2.9-1.8 5-7.7 6.4-18.2 9.2-27.8 7.4C26 96.8 18.1 90.8 13.1 80c-2.1-4.6-2.6-6.9-2.5-14 0-7.3.4-9.3 2.9-14.4 4.9-10.3 13.9-17.4 24.6-19.5 6.1-1.2 5.9-1.2 12.4 0zm33 48.2 2.6 2.2-3.8 5.8c-2 3.1-4.2 5.6-4.8 5.4-.5-.2-2.7-2.8-4.8-5.8l-3.8-5.4 2.6-2.3c3.4-2.9 8.6-2.9 12 .1zm62.4 14.8c-3.3 16.2-16 32-31.9 39.7-11.5 5.6-18.3 7.3-32.6 7.9-20 .9-36-3.6-49.8-13.9-11.2-8.4-20-22.3-22.1-34.7l-.7-4.5 4.9 5.1c14.6 14.9 39.1 16.4 55.5 3.2 3.6-2.9 3.9-2.9 6.3-1.3 2.4 1.6 2.7 1.6 4.5-.1 1.8-1.7 2.1-1.6 5.7 1.2 17 13.4 41.2 12.1 55.6-3.1 2.9-3 5.3-5.3 5.5-5.2.1.2-.3 2.7-.9 5.7z"/><path d="M48 53.9c-5 2.7-7.3 6.2-7.7 12.3-.3 4.1.1 6 1.6 8.6 8.2 13 28.1 7.4 28.1-7.9 0-11.1-12.1-18.3-22-13zm6.2 3.8c2.2 2 2.3 4.1.1 6.5-2 2.2-4.1 2.3-6.5.1-2.2-2-2.3-4.6-.2-6.7 2-2.1 4.3-2 6.6.1zM94 53.8c-4.9 2.4-8 7.5-8 13.1 0 15.8 20.8 21 28.1 7.1 6.8-12.7-7.1-26.8-20.1-20.2zm5.1 3.2c1.2.7 1.9 2.1 1.9 4 0 5.1-5.8 6.8-8.6 2.5-1.5-2.3-1.5-2.7 0-5 1.8-2.7 3.6-3.1 6.7-1.5zM47 117c0 .6 1.1 1.5 2.5 2.2 1.9.8 2.8.8 4-.2 1.2-1 1.8-1 3 0s2.1 1 4 .2c1.4-.7 2.5-1.6 2.5-2.2 0-.6-.8-.5-2 .2-1.6 1-2.4 1-4 0s-2.4-1-4 0-2.4 1-4 0c-1.2-.7-2-.8-2-.2zM86 116.9c0 .5.7 1.4 1.5 2.1 1.2 1 2.1 1 4.1.1 2-.9 3-.9 4 0 1.1.9 2.1.9 3.7.2 1.5-.7 2.9-.8 4-.1 2.2 1.2 5.7.1 5.7-1.8 0-1.2-.3-1.2-2-.2-1.5 1-2.5 1-3.8.2-1.2-.8-2.2-.8-3.5 0-1.2.8-2.2.8-3.7-.2-1.6-1-2.4-1-4 0s-2.4 1-4 0c-1.1-.7-2-.8-2-.3z"/>      </Icon>
    </Box>
  );
}
