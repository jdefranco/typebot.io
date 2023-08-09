import { GitHubIcon } from 'assets/icons'
import { DocIcon } from 'assets/icons/DocIcon'
import { MapIcon } from 'assets/icons/MapIcon'
import { PeopleCircleIcon } from 'assets/icons/PeopleCircleIcon'
import * as React from 'react'

export const links = [
  {
    label: 'Resources',
    children: [
      {
        label: 'About',
        description: 'Learn about Chatworth',
        href: 'https://chatworth.io/about',
        icon: <GitHubIcon fill="blue.300" />,
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
