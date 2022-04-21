import { BOOK_PATH, RELATED_PATH, RESEARCH_PATH } from "src/utils/constants";
import {
  IArchiveSection,
  getMDXFromFolder,
} from "src/archive/getMDXFromFolder";
import path from "path";
import matter from "gray-matter";
import fs from "fs";

export const enum PageStatus {
  success = "success",
  fail = "fail",
}

export interface IPageData {
  meta?: any;
  contents?: any;
  status: PageStatus;
  source?: any;
}

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

export async function getBook(bookID: string) {
  const pageName = bookID.replaceAll(/\W/gi, "");
  const filePath = path.join(BOOK_PATH, `${pageName}.mdx`);

  try {
    const mdxSource = fs.readFileSync(filePath, "utf8");
    const fileData = matter(mdxSource);
    return {
      meta: fileData.data,
      contents: fileData.content,
      status: PageStatus.success,
    };
  } catch (err) {
    return {
      message: `Book name '${pageName}' not found.`,
      status: PageStatus.fail,
    };
  }
}

export async function getRelatedPages() {
  return getMDXFromFolder(RELATED_PATH, "/archive/related").then((pages) => {
    return {
      category: "Related Issues",
      sectionURL: "/archive/related",
      pages,
    } as IArchiveSection;
  });
}

export async function getResearchPages() {
  return getMDXFromFolder(RESEARCH_PATH, "/archive/research").then((pages) => {
    return {
      category: "Academic Research",
      sectionURL: "/archive/research",
      pages,
    } as IArchiveSection;
  });
}
