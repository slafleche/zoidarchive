import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  FieldDefs,
  makeSource,
} from "contentlayer/source-files";
import { SITE_URL } from "./src/utils/constants";

import {
  OpenGraphArticle,
  OpenGraphMedia,
} from "node_modules/next-seo/lib/types";

type ImageArray = Array<OpenGraphMedia>;

const OpenGraphImage = defineNestedType(() => ({
  name: "OpenGraphImage",
  fields: {
    url: {
      type: "string",
      required: true,
    },
    width: {
      type: "number",
      required: false,
    },
    height: {
      type: "number",
      required: false,
    },
    alt: {
      type: "string",
      required: true,
    },
    type: {
      type: "string",
      required: false,
    },
  },
}));

const profile = {
  first_name: {
    type: "string",
    required: true,
  },
  last_name: {
    type: "string",
    required: true,
  },
  username: {
    type: "string",
    required: false,
  },
} as FieldDefs;

const openGraphProfile = defineNestedType(() => ({
  name: "OpenGraphProfile",
  fields: {
    ...profile,
  },
}));

const internalProfile = () => {
  return {
    id: {
      type: "string",
      required: true,
    },
    avatar: {
      type: "nested",
      of: OpenGraphImage,
      required: true,
    },
    ...profile,
  } as FieldDefs;
};

const OpenGraphArticle = defineNestedType(() => ({
  name: "OpenGraphArticle",
  fields: {
    published_time: {
      type: "date",
      required: false,
    },
    modified_time: {
      type: "date",
      requred: false,
    },
    expiration_time: {
      type: "date",
      required: false,
    },
    author: {
      type: "list",
      of: openGraphProfile,
      required: true,
    },
  },
}));

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string", required: true },
  },
}));

const defaultStaticFields: FieldDefs = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  image: {
    type: "list",
    of: OpenGraphImage,
    required: false,
  },
};

const defaultComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
  },
  url: {
    type: "string",
    resolve: (doc) =>
      `${SITE_URL}/books/${doc._raw.sourceFileName.replace(".mdx", "")}`,
  },
};

const heroImage = (required = false) => {
  return {
    heroImage: {
      type: "nested",
      of: OpenGraphImage,
      required: required,
    },
  } as FieldDefs;
};

const article: FieldDefs = {
  published_time: {
    type: "date",
    required: false,
  },
  modified_time: {
    type: "date",
    required: false,
  },
  expiration_time: {
    type: "date",
    required: false,
  },
  author: {
    type: "list",
    of: openGraphProfile,
    required: true,
  },
  section: {
    type: "string",
    required: true,
  },
  tag: {
    type: "list",
    of: Tag,
    required: true,
  },
};

const book: FieldDefs = {
  author: {
    type: "list",
    of: openGraphProfile,
    required: true,
  },
  isbn: {
    type: "string",
    required: true,
  },
  release_date: {
    type: "date",
    required: false,
  },
  tag: {
    type: "list",
    of: Tag,
    required: true,
  },
};

export const BookType = defineDocumentType(() => ({
  name: "Book",
  bodyType: "mdx",
  filePathPattern: "books/*.mdx",
  fields: {
    ...defaultStaticFields,
    ...heroImage(),
    ...book,
    author: {
      type: "list",
      of: openGraphProfile,
      required: true,
    },
  },
  computedFields: {
    ...defaultComputedFields,
  },
}));

export const RelatedType = defineDocumentType(() => ({
  name: "Related",
  bodyType: "mdx",
  filePathPattern: "related/*.mdx",
  fields: {
    ...defaultStaticFields,
    ...heroImage(),
    ...article,
  },
  computedFields: {
    ...defaultComputedFields,
  },
}));

export const ResearchType = defineDocumentType(() => ({
  name: "Research",
  bodyType: "mdx",
  filePathPattern: "research/*.mdx",
  fields: {
    ...defaultStaticFields,
    ...heroImage(),
    ...article,
  },
  computedFields: {
    ...defaultComputedFields,
  },
}));

export default makeSource({
  contentDirPath: "./src/archive/",
  documentTypes: [BookType, RelatedType, ResearchType],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
