'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { sanitizeDropboxURL, sanitizeYoutubeURL } from '~/lib/utils'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { ConverterFormProps } from '~/lib/types'
import { toast } from 'sonner'

const FormSchema = z.object({
  videoUrl: z.string(),
})

export function ConverterForm({ converter, handleSubmit }: ConverterFormProps) {
  const [demoURL] = useState(converter.placeholder)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      videoUrl: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let sanitizedUrl = data.videoUrl

    if (!sanitizedUrl) {
      toast.error('Please enter a valid URL')
      return
    }

    if (converter.href === 'youtube-short') {
      sanitizedUrl = sanitizeYoutubeURL(data.videoUrl)
    }
    if (converter.href === 'dropbox') {
      sanitizedUrl = sanitizeDropboxURL(data.videoUrl)
    }

    console.log({ sanitizedUrl })

    handleSubmit(sanitizedUrl)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4 flex flex-row gap-2 items-center'>
        <FormField
          control={form.control}
          name='videoUrl'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>{converter.title} Video URL</FormLabel>
              <div className='flex flex-row gap-2'>
                <FormControl>
                  {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                  <Input placeholder={demoURL} {...field} autoFocus />
                </FormControl>
                <Button type='submit' size='icon'>
                  <ArrowUp className='size-6' />
                </Button>
              </div>
              {/* <FormDescription>
                The URL of the YouTube Short video you want to convert.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <div className="flex md:flex-row flex-col gap-4 w-full"> */}
        {/* <Button
            className="w-full"
            type="button"
            variant="outline"
            onClick={() =>
              onSubmit({
                videoUrl: demoURL,
              })
            }
          >
            Demo
          </Button> */}

        {/* </div> */}
      </form>
    </Form>
  )
}
