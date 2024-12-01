import styles from './tailwind.css?url'

import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import { Toaster } from 'sonner'
import { APP_NAME } from './lib/config'
import Container from './components/container'

import packageJson from '../package.json'
import { TailwindIndicator } from './components/tailwind-indicator'
import { Analytics } from '@vercel/analytics/react'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Container className='max-w-none flex flex-row gap-2 items-center justify-between border-b'>
            <Link to='/'>
              <h1 className='font-bold hover:underline'>{APP_NAME}</h1>
            </Link>
            <span className='text-sm'>v{packageJson.version}</span>
          </Container>
        </header>
        {children}
        <Toaster position='top-right' />
        <Analytics />
        <TailwindIndicator />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
