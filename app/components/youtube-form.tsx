"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { sanitizeYoutubeURL } from "~/lib/utils";
import { useState } from "react";

const FormSchema = z.object({
  videoUrl: z.string().min(28, {
    message: "URL must be at least 28 characters.",
  }),
});

export function YoutubeForm({
  handleSubmit,
}: {
  handleSubmit: (videoUrl: string) => void;
}) {
  const [demoURL] = useState("https://www.youtube.com/shorts/RbQhjyJFPCo");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      videoUrl: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const sanitizedUrl = sanitizeYoutubeURL(data.videoUrl);
    // toast("You submitted the following values:", {
    //   description: JSON.stringify(sanitizedUrl, null, 2),
    // });

    console.log({ sanitizedUrl });

    handleSubmit(sanitizedUrl);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>YouTube Short Video URL</FormLabel>
              <FormControl>
                <Input placeholder={demoURL} {...field} />
              </FormControl>
              <FormDescription>
                The URL of the YouTube Short video you want to convert.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-2 w-full">
          <Button
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
          </Button>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
