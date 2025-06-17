import mongoose from "mongoose";

const readingSessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  sessionDate: {
    type: Date,
    default: Date,
  },
});
const ReadingSession = mongoose.model("ReadingSession", readingSessionSchema);
export default ReadingSession;
