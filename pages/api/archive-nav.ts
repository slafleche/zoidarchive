// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IArchiveSection } from "src/archive/getMDXFromFolder";
import { getBookPages, getRelatedPages, getResearchPages } from "./getPages";

interface IData {
  name: "Archive Nav Data";
  data: IArchiveSection[];
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const archiveNav = async (req, res) => {
  const data = Promise.all([
    {
      category: "Resouces",
      pages: [
        {
          title: "Communities",
          typeSlug: "/archive/",
          slug: "communities",
        },
        {
          title: "FAQ",
          typeSlug: "/archive/",
          slug: "faq",
        },
        {
          title: "Links",
          typeSlug: "/archive/",
          slug: "faq",
        },
      ],
    },
    getBookPages(),
    getResearchPages(),
    getRelatedPages(),
  ]).then((data) => {
    // console.log("data: ", data);
    res.status(200).json({
      data,
    });
  });
};

export default archiveNav;
