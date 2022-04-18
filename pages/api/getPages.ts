import { BOOK_PATH, RELATED_PATH, RESEARCH_PATH } from "src/utils/constants";
import {
  IArchiveSection,
  getMDXFromFolder,
} from "src/archive/getMDXFromFolder";

export async function getBookPages() {
  return getMDXFromFolder(BOOK_PATH, "/archive/books").then((pages) => {
    // console.log("getBookPages() : ", pages);
    return {
      category: "Books",
      sectionURL: "/archive/books",
      pages,
    } as IArchiveSection;
  });
}

export async function getRelatedPages() {
  return getMDXFromFolder(RELATED_PATH, "/archive/related").then((pages) => {
    // console.log("getRelatedPages() : ", pages);
    return {
      category: "Related Issues",
      sectionURL: "/archive/related",
      pages,
    } as IArchiveSection;
  });
}

export async function getResearchPages() {
  return getMDXFromFolder(RESEARCH_PATH, "/archive/research").then((pages) => {
    // console.log("getResearchPages() : ", pages);
    return {
      category: "Academic Research",
      sectionURL: "/archive/research",
      pages,
    } as IArchiveSection;
  });
}

// let pageData: IPage[] = [];
// const targetDir = `${BOOK_PATH}/**/*.mdx`;

// const pages = glob.sync(targetDir, {
//   onlyFiles: true,
//   caseSensitiveMatch: true,
//   ignore: ["[slug].ts", "index.tsx"],
// });

// if (pages.length) {
// const pageData = await Promise.all(
//   pages.forEach(async (filePath) => {
//     const mdxSource = await fs.readFile(filepath);
//   });
// pages.map(async (filepath) => {
//   const mdxSource = await fs.readFile(filepath);
//   const { content, data } = matter(mdxSource);

//   if (!data.title) {

//   }

//   // const slug = filepath
//   //   .replace(BOOK_PATH, "")
//   //   .replace(/^\/+/, "")
//   //   .replace(new RegExp(path.extname(filepath) + "$"), "");

//   // const mdx = await renderToString(content, { components, scope: data });

//   return {
//     title: data.title,
//   };
// })
// );

// pageData = entries.map((p) => {
//   console.log("p: ", JSON.stringify(p));
//   return {
//     title: "title",
//     href: "#",
//   };
// });
// }

// const postsDirectory = path.join(process.cwd(), "posts");

//   if (!files.length) return [];

//   const content = await Promise.all(
//     files.map(async (filepath) => {
//       const slug = filepath
//         .replace(source, '')
//         .replace(/^\/+/, '')
//         .replace(new RegExp(path.extname(filepath) + '$'), '');

//       const mdxSource = await fs.readFile(filepath);
//       const { content, data } = matter(mdxSource);
//       const mdx = await renderToString(content, { components, scope: data });

//       return {
//         filepath,
//         slug,
//         content,
//         data,
//         mdx,
//       };
//     }),
//   );
//   return content;
// }

// export function getBooks(): IArchiveSection {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, "");

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allPostsData.sort((a: any, b: any) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   // const processedContent = await remark()
//   //   .use(html)
//   //   .process(matterResult.content);
//   // const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }
