import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const YOUTUBE_URL_PREFIX = "https://www.youtube.com/watch?v=";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanitizeYoutubeURL = (videoUrl: string) => {
  // also this format https://youtu.be/bZQun8Y4L2A
  if (videoUrl.includes("youtu.be")) {
    const videoId = videoUrl.split("youtu.be/")[1];
    return `${YOUTUBE_URL_PREFIX}${videoId}`;
  }

  // Handle shorts urls. Convert https://youtube.com/shorts/wk-SVfVuBng?si=EU25yaBDiBdD0Ul8 to https://www.youtube.com/watch?v=EU25yaBDiBdD0Ul8

  if (videoUrl.includes("shorts")) {
    const videoId = videoUrl.split("shorts/")[1].split("?")[0];
    return `${YOUTUBE_URL_PREFIX}${videoId}`;
  }

  return videoUrl;
};

export const sanitizeDropboxURL = (videoUrl: string) => {
  // https://www.dropbox.com/scl/fi/vbzkm68k0td7wk3u5vsbl/hello.mp4
  if (videoUrl.includes("dropbox.com")) {
    return videoUrl.replace("www.dropbox.com", "dl.dropboxusercontent.com");
  }

  return videoUrl;
};
