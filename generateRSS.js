import fs from "fs";
import { Feed } from "feed";
import { SITE_NAME, SITE_URL } from "src/utils/constants";

// https://sreetamdas.com/blog/rss-for-nextjs
// https://github.com/jpmonette/feed

const generateRssFeed = () => {
  const posts = await getSitePaths();
  const date = new Date();
  const author = {
    name: SITE_NAME,
    email: SITE_CONTACT,
  };

  const feed = new Feed({
    title: "The Zoid Archive",
    description:
      "Raising awareness and sharing information about the Schizoid Community",
    id: SITE_URL,
    link: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    favicon: `${SITE_URL}/logo.png`,
    copyright: `All rights reserved ${date.getFullYear()}, The Zoid Archive`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${SITE_URL}/rss/feed.xml`,
      json: `${SITE_URL}/rss/feed.json`,
      atom: `${SITE_URL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${SITE_URL}/blog/${post.slug}`;

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
