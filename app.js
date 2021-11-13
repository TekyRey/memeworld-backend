require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const userRouter = require("./api/users/user.router");
const postRouter = require("./api/posts/post.router");
const commentRouter = require("./api/comments/comment.router");
const followerRouter = require("./api/followers/follower.router");
const messageRouter = require("./api/messages/message.router");

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/followers", followerRouter);
app.use("/api/messages", messageRouter);

app.listen(process.env.PORT, () => {
  console.log("server has started at port " + process.env.PORT);
});
