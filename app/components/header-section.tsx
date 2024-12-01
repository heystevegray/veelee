import { PropsWithChildren } from 'react'
import { cn } from '~/lib/utils'
import { EmptyScreenProps, EmptyScreen } from './empty-screen'

const HeaderSection = ({ children, ...emptyScreenProps }: PropsWithChildren & EmptyScreenProps) => {
  return (
    <EmptyScreen className={cn('w-full p-4 space-y-4 max-w-none flex flex-col items-center justify-center', emptyScreenProps.className)} {...emptyScreenProps}>
      {children}
    </EmptyScreen>
  )
}

export default HeaderSection
