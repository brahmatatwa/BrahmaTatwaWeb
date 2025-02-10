import mongoose from "mongoose";

const audiobookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    duration: { type: Number, required: true },
    audioUrl: { type: String, required: true },
    imageUrl: { type: String, required: true }, // New Image Field
    category: { type: String, required: true }, // New Category Field
  },
  { timestamps: true }
);

const Audiobook = mongoose.model("Audiobook", audiobookSchema);

export default Audiobook;
