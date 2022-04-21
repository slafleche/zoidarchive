// import { useMDXComponent } from "next-contentlayer/hooks";
import components from "src/components/mdx/MDXComponents";
import Article from "src/components/mdx/Article";
import { getBook, getBookPages } from "pages/api/getPages";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface IBookPage {
  title: string;
  description: string;
  source: any;
}

export default function Post(props: IBookPage) {
  const { title, description, source } = props;

  console.log("IN POST: ", props);
  return (
    <Article title={title} description={description}>
      <MDXRemote {...source} components={components} />
    </Article>
  );
}

export async function getStaticPaths() {
  const allPosts = await getBookPages();
  const staticPaths = {
    paths: allPosts.pages.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
  return staticPaths;
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await getBook(slug);

  console.log("post: ", post);

  if (post.contents) {
    const mdxSource = await serialize(post.contents);
    return {
      props: {
        ...post,
        source: mdxSource,
      },
    };
  } else {
    return;
  }
}
