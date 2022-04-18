// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote";
// import MDXComponents from "@components/MDXComponents";
import layoutStyles from "styles/components/layout.css";
import matter from "gray-matter";
// import glob from "fast-glob";
import path from "path";
import hydrate from "next-mdx-remote/hydrate";
import { getMdxContent } from "@utils/get-mdx-content";
import components from "@components/MDXComponents";
import { Layout } from "@components/Layout";

export const BLOG_CONTENT_PATH = "./src/blogs";

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });

  return (
    <Layout>
      <div>
        <h1>{frontMatter.title}</h1>
        {content}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split("/"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const postSlug = slug.join("/");
  const [post] = posts.filter((post) => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  };
}


// import "src/components/MDXComponents";

// const directoryPath = path.join(__dirname, "");

// const getPagesInCurrentFolder = () => {
//   const pages: any[] = [];
//   fs.readdir(directoryPath, function (error, data) {
//     if (error) {
//       console.log("error reading file: ", directoryPath);
//       return [];
//     } else {
//       data
//         .filter((p: any) => {
//           return p.endsWith(".mdx");
//         })
//         .forEach(function (p: any) {
//           pages.push({
//             label: p,
//             source: path.resolve(directoryPath, p),
//           });
//         });
//     }
//   });
//   return pages;
// };

// export async function getBookContent(source: string) {
  // const contentGlob = `${source}/**/*.mdx`;
  // const files = glob.sync(contentGlob);

  // if (!files.length) return [];

  // const content = await Promise.all(
  //   files.map(async (filepath) => {
  //     const slug = filepath
  //       .replace(source, "")
  //       .replace(/^\/+/, "")
  //       .replace(new RegExp(path.extname(filepath) + "$"), "");

  //     const mdxSource = fs.readFile(filepath, "utf8", function (err, data) {
  //       console.log("Error reading file:"), console.log("err: ", err);
  //       console.log("data: ", data);
  //     });

  //     const { content, data } = matter(mdxSource as any);
  //     // const mdx = await renderToString(content, { components, scope: data });

  //     console.log("_____");
  //     console.log("filepath: ", filepath);
  //     console.log("slug: ", slug);
  //     console.log("content: ", content);
  //     console.log("data: ", data);
  //     console.log("_____");

  //     return {
  //       filepath,
  //       slug,
  //       content,
  //       data,
  //       mdx: {},
  //     };
  //   })
  // );
  // const content = [];
  // return content;
// }

// export function BookPage(mdxData: any): JSX.Element {
//   const data = { product: "next" };

//   console.log("________");
//   console.log("mdxData: ", mdxData);
//   console.log("data: ", data);
//   console.log("________");

//   return (
//     // <div className= { layoutStyles.content } >
//     //   Hello
//     //   // <MDXRemote {...mdxData} components={MDXComponents} scope={data} />
//     // </div>;
//     <div>todo</div>
//   );
// }

// export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  // const source =
    // "Some **mdx** text, with a component using a scope variable <Test product={product} />";
  // const mdxSource = await serialize(source);
  // const mdxSource = "";
  // return { props: { source: mdxSource } };
// }

// export async function getStaticPaths() {
//   const paths: any[] = [];
//   const frontMatterData: any[] = [];

//   const posts = getPagesInCurrentFolder();

//   posts.forEach((p) => {
//     const fm = matter(p);
//     console.log("------");
//     console.log("p", p);
//     console.log("frontMatterData", frontMatterData);
//     console.log("------");

//     posts.push({
//       params: {
//         slug: slug.split("/"),
//       },
//     });
//   });

//   console.log("_______________");
//   console.log("posts: ", posts);
//   console.log("slug: ", slug);
//   console.log("paths: ", paths);
//   console.log("_______________");

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getMdxContent(source: any) {
//   console.log("_______");
//   console.log("source: ", source);
//   console.log("_______");
//   const contentGlob = `${source}/**/*.mdx`;
//   const files = glob.sync(contentGlob);

//   if (!files.length) return [];

//   const content = await Promise.all(
//     files.map(async (filepath) => {
//       const slug = filepath
//         .replace(source, "")
//         .replace(/^\/+/, "")
//         .replace(new RegExp(path.extname(filepath) + "$"), "");

//       const mdxSource = await fs.readFile(filepath);
//       const { content, data } = matter(mdxSource);
//       // const mdx = await renderToString(content, { components, scope: data });

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
// }

// export async function getStaticPaths() {
//   const paths = posts.map(({ slug }) => ({
//     params: {
//       slug: slug.split("/"),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// import hydrate from "next-mdx-remote/hydrate";

// export async function getStaticProps({ params: { slug } }) {
//   const posts = await getMdxContent(BLOG_CONTENT_PATH);
//   const postSlug = slug.join("/");
//   const [post] = posts.filter((post) => post.slug === postSlug);

//   if (!post) {
//     console.warn(`No content found for slug ${postSlug}`);
//   }

//   return {
//     props: {
//       mdxSource: post.mdx,
//       frontMatter: post.data,
//     },
//   };
// }
