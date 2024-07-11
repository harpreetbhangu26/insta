"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { searchYoutube } from "../searchYoutube";
import { Plus } from "lucide-react";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);

  // Use useEffect to initialize state from localStorage on the client-side
  useEffect(() => {
    const savedQuery = localStorage.getItem("query");
    const savedVideos = localStorage.getItem("videos");

    if (savedQuery) {
      setQuery(savedQuery);
    }

    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    }
  }, []);

  const handleClear = () => {
    setQuery("");
    setVideos([]);
    localStorage.removeItem("query");
    localStorage.removeItem("videos");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    const videosData = await searchYoutube(query);
    setVideos(videosData);
    localStorage.setItem("videos", JSON.stringify(videosData));
    localStorage.setItem("query", query);
  };

  return (
    <div className="flex flex-col w-full p-8 mt-3">
      <form className="flex flex-row mb-5 " onSubmit={handleSubmit}>
        <input
          className="border rounded-xl placeholder:p-2 p-3"
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <Plus
            className="flex rotate-45  text-gray-500 cursor-pointer translate-x-[-38px] translate-y-[10px]"
            onClick={handleClear}
          />
        )}
        <button
          className="bg-blue-500 text-white p-3 rounded-md ml-3"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 gap-8">
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h1 className="font-bold mb-3">{video.snippet.title} </h1>
            <iframe
              className="w-full h-52"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allowFullScreen
            />
            <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
