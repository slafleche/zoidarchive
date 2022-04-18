import { getBookPages } from "./getPages";

const books = async (req, res) => {
  const data = await getBookPages();
  console.log("book data: ", data);
  let response = {
    pages: data.pages,
  };
  res.status(200).json(response);
};

export default books;
