import Article from "src/components/mdx/Article";
import { getBook, getBookPages, IPageData } from "pages/api/getPages";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import customComponentsMDX from "src/components/mdx/MDXComponents";

export default function Post(props: IPageData) {
  const { source, meta = {} } = props;
  const { title, description } = meta;

  return (
    <Article title={title} description={description}>
      <MDXRemote {...source} components={customComponentsMDX} />
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
