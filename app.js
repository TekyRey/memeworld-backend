require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const userRouter = require("./api/users/user.router");
const postRouter = require("./api/posts/post.router");
const commentRouter = require("./api/comments/comment.router");

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);


app.listen(process.env.PORT, () => {
  console.log("server has started at port " + process.env.PORT);
});
