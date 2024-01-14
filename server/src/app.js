import express from "express";
import cors from "cors";
import postRouter from "./routes/posts.route.js";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors());


// routes
app.use("/posts", postRouter);

export default app;