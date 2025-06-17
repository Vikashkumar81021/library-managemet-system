import express from "express";
import isAuthenticate, { requireRole } from "../middlewares/auth.middleware.js";
import { createBook, getBooks } from "../controller/book.controller.js";

const router = express.Router();
router.post(
  "/create",
  isAuthenticate,
  requireRole(["admin", "teacher"]),
  createBook
);
router.get("/", getBooks);

export default router;
