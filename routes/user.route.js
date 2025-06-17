import express from "express";
import {
  register,
  login,
  logout,
  currentUser,
} from "../controller/user.controller.js";
import isAuthenticate, { requireRole } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/me", isAuthenticate, currentUser);
export default router;
