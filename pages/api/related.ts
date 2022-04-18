import { getRelatedPages } from "./getPages";

const related = async (req, res) => {
  const data = await getRelatedPages();
  let response = {
    pages: data.pages,
  };
  res.status(200).json(response);
};

export default related;
