import { useEffect, useState } from "react";

export interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export const getArtikelData = async (): Promise<Article[]> => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.API_KEY_NEWS_API}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.articles as Article[];
};