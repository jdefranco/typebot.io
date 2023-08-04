import { extendTheme } from '@chakra-ui/react'

const config = { initialColorMode: 'dark', useSystemColorMode: false }

const fonts = {
  heading: 'Outfit',
  body: 'Open Sans',
}

const colors = {
  royalPurple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
  gold: {
    50: '#FFF9E6',
    100: '#FFF0B3',
    200: '#FFE680',
    300: '#FFDC4D',
    400: '#FFD31A',
    500: '#E6BD00',
    600: '#B39D00',
    700: '#806E00',
    800: '#4E3F00',
    900: '#1D1500',
  },
  darkGray: {
    50: '#E0E0E0',
    100: '#B3B3B3',
    200: '#808080',
    300: '#4D4D4D',
    400: '#1A1A1A',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
  },
  blue: {
    50: '#e0edff',
    100: '#b0caff',
    200: '#7ea6ff',
    300: '#4b83ff',
    400: '#1a5fff',
    500: '#0042da',
    600: '#0036b4',
    700: '#002782',
    800: '#001751',
    900: '#1a202c',
  },
  orange: {
    50: '#fff1da',
    100: '#ffd7ae',
    200: '#ffbf7d',
    300: '#ffa54c',
    400: '#ff8b1a',
    500: '#e67200',
    600: '#b45800',
    700: '#813e00',
    800: '#4f2500',
    900: '#200b00',
  },
  yellow: {
    50: '#fff9da',
    100: '#ffedad',
    200: '#ffe17d',
    300: '#ffd54b',
    400: '#ffc91a',
    500: '#e6b000',
    600: '#b38800',
    700: '#806200',
    800: '#4e3a00',
    900: '#1d1400',
  },
}

const components = {
  Button: {
    defaultProps: {
      colorScheme: 'royalPurple',
    },
    variants: {
      solid: () => ({
        bg: 'royalPurple.400',
        color: 'white',
        shadow: 'inset 0 1px 0 0 rgb(255 255 255/.2)',
        _hover: {
          bg: 'royalPurple.300',
        },
      }),
    },
  },
  NumberInput: {
    defaultProps: {
      focusBorderColor: 'royalPurple.200',
    },
  },
  Input: {
    defaultProps: {
      focusBorderColor: 'royalPurple.200',
    },
  },
  Popover: {
    baseStyle: {
      popper: {
        width: 'fit-content',
        maxWidth: 'fit-content',
      },
    },
  },
  Tooltip: {
    baseStyle: {
      borderRadius: 'md',
    },
  },
  Link: {
    baseStyle: {
      _hover: { textDecoration: 'none' },
    },
  },
}

export const theme = extendTheme({
  fonts,
  components,
  colors,
  config,
})
