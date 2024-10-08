import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
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
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="leading text-2xl font-bold">VLINK</h1>
        <YoutubeForm handleSubmit={handleSubmit} />
        {/* Preview youtube video */}
        {videoUrl && (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold">Preview</h2>
            <iframe
              // width="560"
              // height="315"
              src={videoUrl.replace("watch?v=", "embed/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
