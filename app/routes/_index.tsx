import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { toast } from "sonner";
import ActionsToolbar from "~/components/actions-toolbar";
import Container from "~/components/container";
import { YoutubeForm } from "~/components/youtube-form";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [videoUrl, setVideoUrl] = useState("");
  const handleSubmit = async (videoUrl: string) => {
    console.log({ videoUrl });
    setVideoUrl(videoUrl);
    // copy text to clipboard
    try {
      await navigator.clipboard.writeText(videoUrl);
      toast.success("Copied this URL to your clipboard", {
        description: videoUrl,
      });
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="flex h-screen justify-center">
      <Container className="flex flex-col gap-8 pt-8 md:pt-24">
        {/* Preview youtube video */}
        {videoUrl ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Preview</h2>
            <iframe
              className="aspect-video"
              src={videoUrl.replace("watch?v=", "embed/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="text-center">Add a url to see a preview.</p>
        )}
      </Container>
      <ActionsToolbar>
        <YoutubeForm handleSubmit={handleSubmit} />
      </ActionsToolbar>
    </div>
  );
}
