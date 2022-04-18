// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IArchiveSection, IPageLink } from "src/archive/getMDXFromFolder";
import { getBookPages, getRelatedPages, getResearchPages } from "./getPages";

export interface IData {
  name: "Archive Nav Data";
  data: IArchiveSection[];
}

const enum dataStructure {
  category = "category",
  chain = "chain",
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const archiveNav = async (req, res) => {
  const {
    query: { format = dataStructure.category },
  } = req;

  const formats = format.split(",");

  const data = Promise.all([
    {
      category: "Resouces",
      pages: [
        {
          title: "FAQ",
          typeSlug: "/archive",
          slug: "faq",
        },
        {
          title: "Communities",
          typeSlug: "/archive",
          slug: "communities",
        },
        {
          title: "Links",
          typeSlug: "/archive",
          slug: "links",
        },
      ],
    },
    getRelatedPages(),
    getBookPages(),
    getResearchPages(),
  ]).then((data) => {
    let response = {};

    const asCategories = formats.indexOf(dataStructure.category) >= 0;
    const asChain = formats.indexOf(dataStructure.chain) >= 0;

    // Default to data if nothing valid was specified
    if (asCategories || (!asCategories && !asChain)) {
      response["asCategories"] = data;
    }

    if (asChain) {
      const chainLinks: IPageLink[] = [];
      let indexCount = 0;

      data.forEach((cat) => {
        const category = cat.category;
        cat.pages.forEach((page, i) => {
          chainLinks.push({
            ...page,
            category,
            previous: indexCount - 1,
            next: ++indexCount,
          });
        });
      });

      // Fix first and last indexes
      chainLinks[0].previous = indexCount - 1;
      chainLinks[indexCount - 1].next = 0;

      // response["debug"] = {
      //   indexCount,
      // };

      // Add to response
      response["asChain"] = chainLinks;
    }

    res.status(200).json(response);
  });
};

export default archiveNav;
