import type { MetaFunction } from '@remix-run/node'
import Container from '~/components/container'
import Converters from '~/components/converters'
import HeaderSection from '~/components/header-section'
import { APP_DESCRIPTION, APP_NAME } from '~/lib/config'
import { Converter } from '~/lib/types'

export const meta: MetaFunction = () => {
  return [{ title: APP_NAME }, { name: 'description', content: APP_DESCRIPTION }]
}

export const converters: Converter[] = [
  {
    href: 'dropbox',
    title: 'Dropbox',
    description: 'Convert Dropbox shared links to serve user content directly.',
    placeholder: 'https://www.dropbox.com/scl/fi/vbzkm68k0td7wk3u5vsbl/hello.mp4',
    icon: (
      <svg className='fill-foreground size-8' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <title>Dropbox</title>
        <path d='M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z' />
      </svg>
    ),
  },
  {
    href: 'youtube-short',
    title: 'YouTube Short',
    description: 'Convert YouTube Shorts to their Youtube Video links.',
    placeholder: 'https://www.youtube.com/shorts/SXHMnicI6Pg',
    icon: (
      <svg className='fill-foreground size-8' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <title>YouTube</title>
        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
      </svg>
    ),
  },
]

export default function Index() {
  return (
    <Container className='flex flex-col gap-8 pt-8 md:pt-24'>
      <HeaderSection title='Choose a converter' description='Select a converter below to get started.' />
      <Converters />
    </Container>
  )
}
