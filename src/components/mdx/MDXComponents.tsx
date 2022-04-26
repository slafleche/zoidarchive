import Link from "src/components/mdx/Link";
import NoH1 from "./NoH1";
import Image from "./Image";

// For types see /node_modules/@types/react/index.d.ts
const customComponentsMDX: import("mdx/types").MDXComponents = {
  h1: NoH1,
  a: Link,
  img: Image as any,
};

export default customComponentsMDX;
