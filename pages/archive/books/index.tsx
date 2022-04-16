import { NextSeo } from "next-seo";
import { SkipNavContent } from "@reach/skip-nav";
import { Navbar } from "../../../src/components/nav/Navbar";
import matter from "gray-matter";
import { join } from "path";
import { ScholarSource } from "../../../src/components/ScholarSource";

// export interface AuthorType {
//   name: string;
//   picture: string;
// }

// export interface ArticleType {
//   slug: string;
//   title: string;
//   description: string;
//   date: string;
//   coverImage: string;
//   author: AuthorType;
//   excerpt: string;
//   timeReading: {
//     text: string;
//   };
//   ogImage: {
//     url: string;
//   };
//   content: string;
// }

// export interface BlogArticleType {
//   [key: string]: string | Array<string>;
// }

// export interface API {
//   getRawArticleBySlug: (slug: string) => matter.GrayMatterFile<string>;
//   getAllSlugs: () => Array<string>;
//   getAllArticles: (fields: string[]) => Array<BlogArticleType>;
//   getArticlesByTag: (tag: string, fields: string[]) => Array<BlogArticleType>;
//   getArticleBySlug: (slug: string, fields: string[]) => BlogArticleType;
//   getAllTags: () => Array<string>;
// }

// export const api: API = {
//   getRawArticleBySlug,
//   getAllSlugs,
//   getAllArticles,
//   getArticlesByTag,
//   getArticleBySlug,
//   getAllTags,
// };

// const articlesDirectory = join(process.cwd(), "pages/resources/books");

// function getRawArticleBySlug(slug: string): matter.GrayMatterFile<string> {
//   const fullPath = join(articlesDirectory, `${slug}.mdx`);
//   // const fileContents = fs.readFileSync(fullPath, "utf8");
//   const fileContents = "";
//   return matter(fileContents);
// }

// function getAllSlugs(): Array<string> {
//   // return fs.readdirSync(articlesDirectory);
//   return [];
// }

// function getArticleBySlug(
//   slug: string,
//   fields: string[] = []
// ): BlogArticleType {
//   const realSlug = slug.replace(/\.mdx$/, "");
//   const { data, content } = getRawArticleBySlug(realSlug);

//   const items: BlogArticleType = {};

//   fields.forEach((field) => {
//     if (field === "slug") {
//       items[field] = realSlug;
//     }
//     if (field === "content") {
//       items[field] = content;
//     }
//     if (data[field]) {
//       items[field] = data[field];
//     }
//   });
//   return items;
// }

// function getAllArticles(fields: string[] = []): Array<BlogArticleType> {
//   return getAllSlugs()
//     .map((slug) => getArticleBySlug(slug, fields))
//     .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
// }

// function getArticlesByTag(
//   tag: string,
//   fields: string[] = []
// ): Array<BlogArticleType> {
//   return getAllArticles(fields).filter((article) => {
//     const tags = article.tags ?? [];
//     return tags.includes(tag);
//   });
// }

// function getAllTags(): Array<string> {
//   const articles = getAllArticles(["tags"]);
//   const allTags = new Set<string>();
//   articles.forEach((article) => {
//     const tags = article.tags as Array<string>;
//     tags.forEach((tag) => allTags.add(tag));
//   });
//   return Array.from(allTags);
// }

//https://w3c.github.io/scholarly-html/
function Books() {
  return (
    <>
      <NextSeo title="Resources | Books" />
      <Navbar />
      <SkipNavContent>
        {/* <ScholarSource
          resourceURL="#"
          title="Test Title"
          subTitle="Test Sub Title"
        >
          Testing Scholarly Resource
        </ScholarSource> */}
        <h1>Books</h1>
      </SkipNavContent>
    </>
  );
}

export default Books;
