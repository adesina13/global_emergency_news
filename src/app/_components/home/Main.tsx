"use client";
import { useEffect, useState } from "react";
import { MainSelect } from "./MainSelect";
import NewsContent from "./NewsContent";
import axios from "axios";
import { UseLanguageStore } from "@/store/UseLanguageStore";

interface NewsArticle {
  uuid: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  image_url: string | null;
  published_at: string;   // ✅ match API
  source: string;
  categories: string[];
}


export default function Main() {
  const language = UseLanguageStore((state) => state.language);
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  useEffect(() => {
    async function fetchNews() {
      document.body.style.cursor = "wait";
      try {
        const response = await axios.get(
          `https://api.thenewsapi.com/v1/news/all?api_token=${API_KEY}&language=${language}&limit=3`
        );
        setNewsData(response.data.data); // save articles into state
      } catch (error) {
        console.error("Error fetching news:", error);
      }finally{
        document.body.style.cursor = "default";
      }
    }

    fetchNews();
  }, [language, API_KEY]); // refetch when language changes

  return (
    <main className="flex-1 h-full px-[50px] py-[53px] overflow-y-auto">
      <header className="flex justify-between mb-[35px]">
        <p className="text-[28px] font-bold">Live News Feed</p>

        <div className="flex gap-[12.18px]">
          <MainSelect
            addClass="w-[100px] px-[7px] py-[6px]"
            options={["General", "Politics", "Health", "Entertainment"]}
            placeholder="Category"
          />
          <MainSelect
            addClass="w-[100px] px-[7px] py-[6px]"
            options={["Africa", "Nigeria", "Kenya", "Ghana"]}
            placeholder="Location"
          />
          <MainSelect
            addClass="w-[130px] px-[7px] py-[6px]"
            options={["Today", "Yesterday", "Last week", "Last month"]}
            placeholder="Time Frame"
          />
        </div>
      </header>

      <section className="flex flex-col gap-[32px]">
        {newsData.map((article) => (
          <NewsContent
            key={article.url}
            time={article.published_at}   // ✅ raw ISO string
            title={article.title}
            headline={article.description}
            imageUrl={article.image_url ?? ""}
          />

        ))}
      </section>
    </main>
  );
}
