import {
  OpenGraph,
  OpenGraphArticle,
  OpenGraphBook,
  OpenGraphMedia,
  OpenGraphProfile,
} from "node_modules/next-seo/lib/types";

// interface IProps {
//     title: string;
//     description: string;
//     type?: "article" | "book" | "profile" | "website";
//     url?: string;
//     images?: ReadonlyArray<OpenGraphMedia>;
//     videos?: ReadonlyArray<OpenGraphMedia>;
//     book?: OpenGraphBook;
//     article?: OpenGraphArticle;
//     profile?: OpenGraphProfile;
// }

// Props are controlled by contentlayer config.
export const openGraphHelper = (props: any = {}) => {
  // generate URL
  const {
    url = "toto",
    type = "website",
    title,
    description,
    images,
    videos,
  } = props;

  return {
    url,
    type,
    title,
    description,
    images,
    videos,
  } as OpenGraph;
};
