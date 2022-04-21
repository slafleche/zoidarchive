import path from "path";
import { BOOK_PATH } from "src/utils/constants";
import matter from "gray-matter";
import fs from "fs";
import { getBook } from "../getPages";

export default async function bookHandler(req, res) {
  const book = getBook(req.query.id);
  if ((await book).status == "success") {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: `Book name '${book}' not found.`,
    });
  }
}
