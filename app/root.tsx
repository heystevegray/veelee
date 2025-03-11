import styles from './globals.css?url'

import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import { Toaster } from 'sonner'
import { siteConfig } from './lib/config'
import Container from './components/container'

import packageJson from '../package.json'
import { TailwindIndicator } from './components/tailwind-indicator'
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/footer'
import { ThemeProvider } from './components/theme-provider'
import { ThemeToggle } from './components/theme-toggle'
import { buttonVariants } from './components/ui/button'
import { cn } from './lib/utils'
import { Icons } from './components/icons'

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
        <script defer src='https://umami.stevegray.io/script.js' data-website-id='3d10b871-275b-4e84-aa06-20466e316c1b'></script>
      </head>
      <body className='min-h-screen font-sans antialiased'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='relative flex min-h-screen w-full flex-col'>
            <header className='sticky top-0 z-40 w-full border-b bg-background'>
              <nav>
                <div className='flex h-16 items-center space-x-4 px-3 sm:justify-between sm:space-x-0'>
                  <Container className='max-w-none flex flex-row gap-2 items-center justify-between'>
                    <div className='flex flex-row gap-2 items-center'>
                      <Link to='/'>
                        <h1 className='font-bold hover:underline'>{siteConfig.name}</h1>
                      </Link>
                      <span className='text-sm'>v{packageJson.version}</span>
                    </div>
                    <div className='flex justify-end'>
                      <Link to={siteConfig.links.github} target='_blank' rel='noreferrer'>
                        <div
                          className={cn(
                            'rounded-full',
                            buttonVariants({
                              size: 'icon',
                              variant: 'ghost',
                            })
                          )}
                        >
                          <Icons.gitHub className='size-5' />
                          <span className='sr-only'>GitHub</span>
                        </div>
                      </Link>
                      <ThemeToggle />
                    </div>
                  </Container>
                </div>
              </nav>
            </header>
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
          <Toaster position='top-right' />
          <Analytics />
          <TailwindIndicator />
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
