import { GitHubIcon } from 'assets/icons'
import { DocIcon } from 'assets/icons/DocIcon'
import * as React from 'react'

export const links = [
  {
    label: 'Resources',
    children: [
      {
        label: 'About',
        description: 'Learn about Chatworth',
        href: 'https://chatworth.io/about',
        icon: <GitHubIcon fill="royalPurple.300" />,
      },
      {
        label: 'Documentation',
        description:
          "Everything you need to know about how to use Chatworth's builder",
        href: 'https://docs.chatworth.io',
        icon: <DocIcon />,
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
]
