import { getBookPages } from "../getPages";

const books = async (req, res) => {
  console.log("REQ", req);

  let response = {};

  console.log("req.query: ", req.query);
  console.log("req.query.id: ", req.query.id);

  const data = await getBookPages();
  response = {
    pages: data.pages,
  };

  res.status(200).json(response);
};

export default books;
