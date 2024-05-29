import { Article, getArtikelData } from "@/services/getArtikelData";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DaftarArtikel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const articles = async () => {
      try {
        const articlesData = await getArtikelData();
        setArticles(articlesData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    articles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(articles);
  return (
    <div className="px-16 flex flex-col gap-12">
      <h1 className="font-bold text-2xl">Artikel Populer</h1>
      <div className=" grid grid-cols-3 gap-6">
        {articles.slice(0, 7).map((article, index) => (
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className=" flex flex-col gap-2"
          >
            <div className="aspect-video bg-gray-300">
              <h1>{article.author}</h1>
            </div>
            <span>
              <p>{article.publishedAt.slice(0, 10)}</p>
              <h2 className="font-semibold text-lg">{article.title}</h2>
            </span>
            <p>{article.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DaftarArtikel;
