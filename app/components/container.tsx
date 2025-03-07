import { cn } from '~/lib/utils'
import { PropsWithChildren } from 'react'

const Container = ({ children, className }: { className?: string } & PropsWithChildren) => {
  return <div className={cn('mx-auto max-w-6xl p-4 w-full', className)}>{children}</div>
}

export default Container
