import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    language: {
      type: String,
    },
    pages: {
      type: Number,
    },
  },
  { timestamps: true }
);
const book = mongoose.model("Book", bookSchema);
export default book;
