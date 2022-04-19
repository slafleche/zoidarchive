import { getBookPages } from "../getPages";

const books = async (req, res) => {
  console.log("REQ", req);
  let response = {};

  if (false) {
    // get single page
  } else {
    const data = await getBookPages();
    console.log("book data: ", data);
    response = {
      pages: data.pages,
    };
  }

  res.status(200).json(response);
};

export default books;
