import { IconSearch } from "@tabler/icons-react";

const youtubeUrls = ["https://www.youtube.com/embed/bh1dBME6DjI"];

export default function VideoPage() {
  return (
    // image masonry layout
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {youtubeUrls.map((url, index) => (
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
