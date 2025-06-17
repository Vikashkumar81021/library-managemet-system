import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.route.js";
import bookroutes from "./routes/book.route.js";
import readsession from "./routes/reading.sesion.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT;
connectDB();
app.use("/api/users", userRoutes);
app.use("/api/book", bookroutes);
app.use("/api/session", readsession);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
