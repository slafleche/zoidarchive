import path from "path";
import { BOOK_PATH } from "src/utils/constants";
import { getBookPages } from "../getPages";

export default function researchHandler(req, res) {
  const targetPage = req.query.id.replaceAll(/\W/gi, "");

  // User with id exists
  if (false) {
    // res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `Research name "${targetPage}" not found.`,
    });
  }

  // const books = await fetch("/api/books")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     const data = res.pages.map((p) => {
  //       return p.title;
  //     });
  //   });

  // if (indexOf(targetPage, books) >= 0) {
  // const filePath = path.resolve(BOOK_PATH, `${id}.mdx`);
  // try {
  //   // const mdxSource = fs.readFileSync(filePath, "utf8");
  //   // const title = path.parse(fileName).name;
  //   // const fileData = matter(`${mdxSource}`);
  //   // const frontMatter = fileData.data;
  //   // const slug = title.toLocaleLowerCase();
  //   // // console.log("frontMatter: ", frontMatter);
  //   // pages.push({
  //   //   title,
  //   //   typeSlug,
  //   //   slug,
  //   // });
  // } catch (err) {
  //   console.error(`Unable to read file "${fileName}"`);
  // }
  // }
}
