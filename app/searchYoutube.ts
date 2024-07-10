const API_KEY = "AIzaSyBytu5vvHt_iwwSW4EWKoWl_CQp27O9fKU";

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

export const searchYoutube = async (query: string): Promise<Video[]> => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${query}&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();

    return data.items.map((item: any) => ({
      id: item.id,
      snippet: item.snippet,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
