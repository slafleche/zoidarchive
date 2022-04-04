import fs from "fs";
import { Feed } from "feed";
import { getBlogPostsData } from "utils/blog";

const generateRssFeed = () => {
  // const posts = await getBlogPostsData();
  const siteURL = "https://zoidarchive.com";
  const date = new Date();
  const author = {
    name: "Zoid Archive",
    email: "zoidarchive@gmail.com",
  };

  const feed = new Feed({
    title: "The Zoid Archive",
    description:
      "Raising awareness and sharing information about the Schizoid Community",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.png`,
    favicon: `${siteURL}/logo.png`,
    copyright: `All rights reserved ${date.getFullYear()}, The Zoid Archive`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.summary,
      content: post.summary,
      author: [author],
      contributor: [author],
      date: new Date(post.publishedAt),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
