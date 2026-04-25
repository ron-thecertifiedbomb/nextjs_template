'use client'

import MetaHead from "@/components/MetaHead/MetaHead";
import { homeContent } from "@/data/page/homeContent";
import { blogArticles } from "@/data/lists/blogArticle";
import BlogContent from "@/components/shared/BlogContent/BlogContent";
import ScreenContainer from "@/components/shared/ScreenContainer/ScreenContainer";


export default function HomePage() {

  const seoEntry = homeContent.find((item) => item.type === "seo");

  return (
    <>
      <MetaHead
        data={{
          title: seoEntry?.data?.title || "Lizard Interactive Online",
          description: seoEntry?.data?.description || "Free online tools for developers, designers, and creators.",
          ogImage: seoEntry?.data?.ogImage || "/og-image-homepage.jpg",
          ogUrl: "https://website_name.com",
          ogType: "website",
        }}
      />

      <ScreenContainer className="pt-24">
        <BlogContent article={blogArticles[0]} />
      </ScreenContainer>
    </>
  );
}