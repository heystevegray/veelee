export type ClassName = { className?: string }

export type SupportedConverters = 'youtube-short' | 'dropbox'

export type ConverterFormProps = {
  handleSubmit: (videoUrl: string) => void
  converter: Converter
}

export type Converter = {
  href: SupportedConverters
  title: string
  description: string
  placeholder: string
  icon: JSX.Element
}
