// import { promises as fs } from "fs";
// import path from "path";
// import renderToString from "next-mdx-remote/render-to-string";
// import matter from "gray-matter";
// import glob from "fast-glob";
// import components from "@components/MDXComponents";

export async function getMdxContent(postTypeRoot: string) {
  //   const contentGlob = `${postTypeRoot}/**/*.mdx`;
  //   const files = glob.sync(contentGlob);

  //   if (!files.length) return [];

  //   const content = await Promise.all(
  //     files.map(async (filepath) => {
  //       const slug = filepath
  //         .replace(postTypeRoot, "")
  //         .replace(/^\/+/, "")
  //         .replace(new RegExp(path.extname(filepath) + "$"), "");

  //       const mdxSource = await fs.readFile(filepath);
  //       const { content, data } = matter(mdxSource);

  //         const mdxSource = await serialize(source);
  //         return { props: { source: mdxSource } };

  //       return {
  //         filepath,
  //         slug,
  //         content,
  //         data,
  //         mdx,
  //       };
  //     })
  //   );
  //   return content;
  return [];
}

export default getMdxContent;
