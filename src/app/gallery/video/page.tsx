"use client";

import { getVideos } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";

const youtubeUrls = ["https://www.youtube.com/embed/bh1dBME6DjI"];
type Document = {
  _type: "videos";
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  videos: any[];
};

export default function VideoPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getVideos()
      .then((res: Document[]) => {
        setVideos(res[0].videos);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  }, []);

  return (
    // image masonry layout
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {isLoading &&
        new Array(8).fill(0).map((_, index: number) => {
          return (
            <div
              key={index}
              className="h-64 flex-1 bg-gray-400 animate-pulse"
            ></div>
          );
        })}
      {videos?.map((url, index) => (
        <div key={index} className="bg-gray-400 flex-1 h-64">
          <iframe
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
