import { getBookPages } from "../getPages";
import fs from "fs";
import { BOOK_PATH } from "src/utils/constants";
import path from "path";
import matter from "gray-matter";

const books = async (req, res) => {
  console.log("REQ", req);

  let response = {};

  console.log("req.query: ", req.query);
  console.log("req.query.id: ", req.query.id);

  if (req.query && req.query.id) {
    const pageName = req.query.id.replaceAll(/\W/gi, "");
    const filePath = path.join(BOOK_PATH, `${pageName}.mdx`);

    try {
      const mdxSource = fs.readFileSync(filePath, "utf8");
      const fileData = matter(mdxSource);
      // const frontMatter = fileData.data;
      // const slug = title.toLocaleLowerCase();
      response = {
        meta: fileData.matter,
        contents: fileData.content,
      };
    } catch (err) {
      res.status(404).json({
        message: `Book name '${pageName}' not found.`,
      });
    }
  } else {
    const data = await getBookPages();
    response = {
      pages: data.pages,
    };
  }

  res.status(200).json(response);
};

export default books;
