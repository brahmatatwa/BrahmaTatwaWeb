import express from "express";
import {
  getAudiobooks,
  getAudiobookById,
  addAudiobook,
  updateAudiobook,
  deleteAudiobook,
} from "../controllers/audioBookController";
const router = express.Router();

router.get("/", getAudiobooks);
router.get("/:id", getAudiobookById);
router.post("/", addAudiobook);
router.put("/:id", updateAudiobook);
router.delete("/:id", deleteAudiobook);

export default router;
