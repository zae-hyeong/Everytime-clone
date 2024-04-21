import bodyParser from "body-parser";
import express from "express";
import { dummyPosts } from "./data/post.module.js";
import { dummyComments } from "./data/comment.module.js";

const app = express();
const DELAY_TIME = 3000;

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

/** /posts */
app.get("/posts", async (req, res) => {
  setTimeout(() => res.status(200).json({
    message: "receive posts successful",
    posts: dummyPosts,
  }), DELAY_TIME);
});

app.get("/posts/:postId", async (req, res) => {
  const post = dummyPosts.find((post) => post.postId === req.params.postId);

  console.log(post);

  setTimeout(() => res.status(200).json({
    message: "receive post successful",
    post: { ...post },
  }), DELAY_TIME);
});

/** /post */
app.put("/post", async (req, res) => {
  const post = req.body;
  
  console.log(post);
  
  dummyPosts.unshift(post);

  setTimeout(() => res.status(200).json({ message: "post upload successful" }), DELAY_TIME);
});

app.get("/post/:postId", async (req, res) => {
  const postIndex = dummyPosts.findIndex(
    (post) => post.postId === req.params.postId
  );

  console.log(dummyPosts[postIndex]);

  if (postIndex === -1)
    res.status(401).json({ message: "incorrect post Id" });
  else {
    dummyPosts.splice(postIndex, 1);
    console.log(dummyPosts);
    setTimeout(() => res.status(200).json({ message: "delete post successful" }), DELAY_TIME);
  }
});

/** /comments */
app.get("/comments", async (req, res) => {
  setTimeout(() => res.status(200).json({
    message: "receive comments successful",
    comments: dummyComments,
  }), DELAY_TIME);
});

/** /comment */
app.put("/comment", async (req, res) => {
  const comment = req.body;

  dummyComments.push(comment);

  console.log(dummyComments);

  setTimeout(() => res.status(200).json({ message: "comment upload successful" }), DELAY_TIME);
});

app.get("/comment/:commentId", async (req, res) => {
  const commentIndex = dummyComments.findIndex(
    (comment) => comment.commentId === req.params.commentId
  );

  console.log(dummyComments[commentIndex]);

  if (commentIndex === -1)
    res.status(401).json({ message: "incorrect comment Id" });
  else {
    dummyComments.splice(commentIndex, 1);
    setTimeout(() => res.status(200).json({ message: "comment delete successful" }), DELAY_TIME);
  }
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3001);
