import book from "../models/book.model.js";

const createBook = async (req, res) => {
  try {
    const { title, author, description, category, pages, language } = req.body;
    if (!title || !author || !description || !category) {
      return res
        .status(400)
        .json({ message: "missing all fields are required" });
    }
    const newBook = await book.create({
      title,
      author,
      description,
      category,
      pages,
      language,
    });
    return res
      .status(201)
      .json({ message: "Book created successfully", newBook });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getBooks = async (_, res) => {
  try {
    const books = await book.find();
    return res.status(200).json({ message: "Get all Books", books });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export { createBook, getBooks };
