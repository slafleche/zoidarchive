// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IArchiveSection } from "src/archive/getMDXFromFolder";
import { getBookLinks } from "./getBooks";

interface IData {
  name: "Archive Nav Data";
  data: IArchiveSection[];
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const archiveNav = async (req, res) => {
  const data = Promise.all([
    getBookLinks(),
    getBookLinks(),
    getBookLinks(),
  ]).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

export default archiveNav;
