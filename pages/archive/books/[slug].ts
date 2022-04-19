import React from "react";
import Layout from "src/layouts/MDXLayout";
import matter from "gray-matter";

const IndexPage = ({ page }) => ({ page });

IndexPage.getInitialProps = async ({ req }) => {
  fetch(`/api/books${req.query.id}`)
    .then((res) => res.json())
    .then((res) => {
      return {
        page: res.contents,
      };
    });
};

export default IndexPage;
