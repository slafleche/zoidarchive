import {
  defineDocumentType,
  DocumentTypeDef,
  makeSource,
} from "contentlayer/source-files";

const defaultPostType = {
  name: "Post",
  filePathPattern: "*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
    },
  },
} as DocumentTypeDef<string>;

export const BookType = defineDocumentType(() => ({
  ...defaultPostType,
  name: "Book",
  filePathPattern: "books/*.mdx",
}));

export const RelatedType = defineDocumentType(() => ({
  ...defaultPostType,
  name: "Related",
  filePathPattern: "related/*.mdx",
}));

export const ResearchType = defineDocumentType(() => ({
  ...defaultPostType,
  name: "Research",
  filePathPattern: "research/*.mdx",
}));

export default makeSource({
  contentDirPath: "src/archive/",
  documentTypes: [BookType, RelatedType, ResearchType],
  //   mdx: {
  //     remarkPlugins: [],
  //     rehypePlugins: [],
  //   },
});
