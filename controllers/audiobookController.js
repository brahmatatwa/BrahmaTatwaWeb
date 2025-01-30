import Audiobook from "../models/audiobookModel.js";

// Get all audiobooks
export const getAudiobooks = async (req, res) => {
  try {
    const audiobooks = await Audiobook.find();
    res.json(audiobooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get audiobook by ID
export const getAudiobookById = async (req, res) => {
  try {
    const audiobook = await Audiobook.findById(req.params.id);
    if (!audiobook) return res.status(404).json({ message: "Not found" });
    res.json(audiobook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new audiobook
export const addAudiobook = async (req, res) => {
  try {
    const audiobook = new Audiobook(req.body);
    await audiobook.save();
    res.status(201).json(audiobook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update audiobook
export const updateAudiobook = async (req, res) => {
  try {
    const updatedAudiobook = await Audiobook.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAudiobook)
      return res.status(404).json({ message: "Not found" });
    res.json(updatedAudiobook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete audiobook
export const deleteAudiobook = async (req, res) => {
  try {
    await Audiobook.findByIdAndDelete(req.params.id);
    res.json({ message: "Audiobook deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
