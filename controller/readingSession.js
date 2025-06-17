import ReadingSession from "../models/readingsesion.model.js";
const logreadingSession = async (req, res) => {
  try {
    const { bookid, duration } = req.body;
    if (!bookid || !duration) {
      return res.status(400).json({ message: "Book ID and duration required" });
    }
    const session = await ReadingSession.create({
      user: req.user._id,
      book: bookid,
      duration,
    });
    res.status(201).json({ message: "Reading session logged", session });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReadingTime = async (req, res) => {
  try {
    const { userId } = req.params;
    const sessions = await ReadingSession.find({ user: userId });
    const totalSeconds = sessions.reduce(
      (acc, session) => acc + session.duration,
      0
    );
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    res.status(200).json({
      userId,
      totalReadingTime: {
        hours,
        minutes,
        seconds,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { logreadingSession };
