import express from "express";
import { getPosts} from "../controllers/posts.controller.js";
import { createPost } from "../controllers/posts.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;