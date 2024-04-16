import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";
import { dummyPosts } from "./data/post.module.js";
import { dummyComments } from "./data/comment.module.js";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/posts", async (req, res) => {
  res.status(200).json({
    message: "receive posts successful",
    posts: [...dummyPosts],
  });
});

app.get("/posts/:postId", async (req, res) => {
  const post = dummyPosts.find((post) => post.postId === req.params.postId);

  console.log(post);

  res.status(200).json({
    message: "receive post successful",
    post: { ...post },
  });
});

app.get("/comments", async (req, res) => {
  res.status(200).json({
    message: "receive comments successful",
    comments: dummyComments,
  });
});

app.put("/comments", async (req, res) => {
  const comment = req.body.places;

  await dummyComments.push(comment);

  res.status(200).json({ message: "comment upload successful" });
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3001);
