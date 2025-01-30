import Audiobook from "../models/audiobookModel.js";

// Get all audiobooks with their categories
export const getAudiobooks = async (req, res) => {
  try {
    const audiobooks = await Audiobook.find(); // Fetch all audiobooks
    res.status(200).json({
      count: audiobooks.length,
      audiobooks,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching audiobooks" });
  }
};

// Get a single audiobook by ID
export const getAudiobookById = async (req, res) => {
  try {
    const audiobook = await Audiobook.findById(req.params.id);
    if (!audiobook) {
      return res.status(404).json({ error: "Audiobook not found" });
    }
    res.status(200).json(audiobook);
  } catch (error) {
    res.status(500).json({ error: "Error fetching audiobook" });
  }
};

// Create a new audiobook
export const createAudiobook = async (req, res) => {
  try {
    const { title, author, duration, audioUrl, imageUrl, category } = req.body;

    // Validate data (basic validation)
    if (!title || !author || !audioUrl || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newAudiobook = new Audiobook({
      title,
      author,
      duration,
      audioUrl,
      imageUrl,
      category,
    });

    await newAudiobook.save();
    res.status(201).json(newAudiobook);
  } catch (error) {
    res.status(500).json({ error: "Error creating audiobook" });
  }
};

// Update an audiobook
export const updateAudiobook = async (req, res) => {
  try {
    const { title, author, duration, audioUrl, imageUrl, category } = req.body;

    // Find the audiobook by ID and update
    const updatedAudiobook = await Audiobook.findByIdAndUpdate(
      req.params.id,
      { title, author, duration, audioUrl, imageUrl, category },
      { new: true }
    );

    if (!updatedAudiobook) {
      return res.status(404).json({ error: "Audiobook not found" });
    }

    res.status(200).json(updatedAudiobook);
  } catch (error) {
    res.status(500).json({ error: "Error updating audiobook" });
  }
};

// Delete an audiobook
export const deleteAudiobook = async (req, res) => {
  try {
    const deletedAudiobook = await Audiobook.findByIdAndDelete(req.params.id);

    if (!deletedAudiobook) {
      return res.status(404).json({ error: "Audiobook not found" });
    }

    res.status(200).json({ message: "Audiobook deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting audiobook" });
  }
};

// Get all audiobooks by a specific author
export const getAudiobooksByAuthor = async (req, res) => {
  try {
    const { author } = req.params; // Get author from request parameters
    const audiobooks = await Audiobook.find({ author }); // Find books by author

    if (!audiobooks.length) {
      return res
        .status(404)
        .json({ error: "No audiobooks found for this author" });
    }

    res.status(200).json({
      count: audiobooks.length,
      audiobooks,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching audiobooks by author" });
  }
};

// Get all audiobooks by a specific category
export const getAudiobooksByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Get category from request parameters
    const audiobooks = await Audiobook.find({ category }); // Find books by category

    if (!audiobooks.length) {
      return res
        .status(404)
        .json({ error: "No audiobooks found for this category" });
    }

    res.status(200).json({
      count: audiobooks.length,
      audiobooks,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching audiobooks by category" });
  }
};
