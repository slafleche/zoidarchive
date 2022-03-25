// import { getSortedPostsData } from "../../src/lib/getPosts";

// const posts =
//   process.env.NODE_ENV === "production"
//     ? require("../../cache/data").posts
//     : getSortedPostsData();

// const search = (req, res) => {
//   console.log("type of req: ", typeof req);
//   console.log("type of res: ", typeof res);
//   //   const results = req.query.q
//   //     ? posts.filter((post) => post.title.toLowerCase().includes(req.query.q))
//   //     : [];
//   const results: any[] = [];
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ results }));
// };

// export default search;
