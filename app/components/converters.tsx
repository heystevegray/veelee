import { Link } from '@remix-run/react'
import { converters } from '~/routes/_index'

const Converters = () => {
  return (
    <div className='flex flex-wrap gap-4 w-full justify-center items-center md:flex-row flex-col'>
      {converters.map((converter) => (
        <Link key={converter.href} to={`/${converter.href}`} className='flex flex-col gap-4 justify-center rounded-md bg-card p-8 items-center hover:scale-110 hover:shadow-lg transition-transform w-full md:min-w-60 md:w-fit'>
          <div>{converter.icon}</div>
          <div className='text-xl'>{converter.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default Converters
