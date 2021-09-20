const express = require("express");
import { AuthenticateToken } from "../Middlewares/tokenValidate";
import { createUser, loginUser } from "../Controllers/userController";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser);

export default router;
