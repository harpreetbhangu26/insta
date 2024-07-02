"use client";
import { useEffect, useState } from "react";
import { fetchEpornerData } from "../lib/api";

interface Video {
  id: string;
  title: string;
  default_thumb: string;
  embed: string; // Make sure this field exists
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchEpornerData(
          "video/search/?query=teen&per_page=10&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json"
        );
        console.log(data); // Inspect the API response
        setVideos(data.videos || []);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    loadData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Videos</h1>
      <video src="/gagan.mp4" controls width={500} height={500}></video>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => {
          console.log(video);
          return (
            <div key={video.id} className="bg-gray-800 p-4 rounded">
              <video
                controls
                src={video.embed}
                className="w-full h-auto rounded"
                width={500}
                height={500}
              >
                Your browser does not support the video tag.
              </video>
              <h2 className="text-lg font-bold mt-2">{video.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
