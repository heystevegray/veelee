import { Link } from '@remix-run/react'
import { Converter } from '~/lib/types'

const LinkButton = ({ title, href }: Converter) => {
  return <Link to={href}>{title}</Link>
}

export default LinkButton
