import { getResearchPages } from "./getPages";

const research = async (req, res) => {
  const data = await getResearchPages();
  let response = {
    pages: data.pages,
  };
  res.status(200).json(response);
};

export default research;
