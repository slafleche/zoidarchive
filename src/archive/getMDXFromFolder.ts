import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { BOOK_PATH } from "src/utils/constants";

export interface IPage {
  title: string;
  typeSlug: string;
  slug: string;
}

export interface IArchiveSection {
  category: string;
  pages: IPage[];
}

export const getMDXFromFolder = (sourcePath: string, typeSlug: string) => {
  const pages: IPage[] = [];
  return new Promise((resolve, reject) => {
    fs.readdir(sourcePath, function (error, data) {
      if (error) {
        reject(error);
      } else {
        data
          .filter((svg) => {
            return svg.endsWith(".mdx");
          })
          .forEach(function (fileName) {
            const filePath = path.resolve(sourcePath, fileName);
            try {
              const mdxSource = fs.readFileSync(filePath, "utf8");
              const title = path.parse(fileName).name;
              const fileData = matter(`${mdxSource}`);
              const frontMatter = fileData.data;
              const slug = title.toLocaleLowerCase();
              console.log("frontMatter: ", frontMatter);
              pages.push({
                title,
                typeSlug,
                slug,
              });
            } catch (err) {
              console.error(`Unable to read file "${fileName}"`);
            }
          });
        resolve(pages);
      }
    });
  });
};
