import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Jonathan Muhire',
  description:
    'Prev Cofounder @ Neotix · Building infrastructure for embodied AI through robotics data and continuous learning',
  href: 'https://jonathan-321.github.io',
  author: 'Jonathan Muhire',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Jonathan-321',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jonathan-muhire-aa8b06184/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:muhirejonathan123@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
