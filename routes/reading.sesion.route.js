import express from "express";
import isAuthenticate, { requireRole } from "../middlewares/auth.middleware.js";
import {
  getReadingTime,
  logreadingSession,
} from "../controller/readingSession.js";

const router = express.Router();

router.post("/", isAuthenticate, logreadingSession);
router.get(
  "/:userid",
  isAuthenticate,
  requireRole(["admin", "teacher", "student"]),
  getReadingTime
);

export default router;
