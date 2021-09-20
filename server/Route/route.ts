const express = require("express");
import { AuthenticateToken } from "../Middlewares/tokenValidate";
import { createUser, loginUser } from "../Controllers/userController";
import {createPost, getAllPost} from "../Controllers/postController";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser);

// Post Routes
router.post("/create-post", AuthenticateToken ,createPost)
router.get("/get-all-posts", AuthenticateToken, getAllPost)

export default router;
