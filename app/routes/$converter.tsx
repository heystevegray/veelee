import { useParams } from '@remix-run/react'
import { useState } from 'react'
import { toast } from 'sonner'
import ActionsToolbar from '~/components/actions-toolbar'
import Container from '~/components/container'
import { ConverterForm } from '~/components/converter-form'
import { converters } from './_index'
import HeaderSection from '~/components/header-section'
import { AlertCircle } from 'lucide-react'
import Converters from '~/components/converters'

const Converter = () => {
  const params = useParams()
  const [videoUrl, setVideoUrl] = useState('')

  const converter = converters.find((converter) => converter.href === params.converter)

  const handleSubmit = async (videoUrl: string) => {
    console.log({ videoUrl })
    setVideoUrl(videoUrl)
    // copy text to clipboard
    try {
      await navigator.clipboard.writeText(videoUrl)
      toast.success('Copied this URL to your clipboard', {
        description: videoUrl,
      })
    } catch (error) {
      toast.error('Failed to copy to clipboard')
    }
  }

  if (!params?.converter || !converter) {
    return (
      <HeaderSection icon={<AlertCircle />} title='Unsupported converter' description="Sorry, this converter is not supported yet we're not Bezos. Choose from one we do support below.">
        <Converters />
      </HeaderSection>
    )
  }

  return (
    <div className='flex h-screen justify-center'>
      <Container className='flex flex-col gap-8 pt-8 md:pt-24'>
        {videoUrl ? (
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Preview</h2>
            <iframe className='aspect-video' src={videoUrl.replace('watch?v=', 'embed/')} title='Video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
          </div>
        ) : (
          // <h2 className='text-center text-3xl'></h2>
          <HeaderSection icon={converter.icon} title={converter.title} description={`Add a ${converter.title} URL below to get started.`} />
        )}
      </Container>
      <ActionsToolbar>
        <ConverterForm converter={converter} handleSubmit={handleSubmit} />
      </ActionsToolbar>
    </div>
  )
}

export default Converter
