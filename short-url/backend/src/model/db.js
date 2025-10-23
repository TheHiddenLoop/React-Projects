import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalURL: {
      type: String,
      required: true,
    },
    shortURL: {
      type: String,
      required: true,
    },
    urlCode: {
      type: String,
      required: true,
      unique: true,
    },
    expiresAt: {
      type: Date,
      default: null,
      index: { expireAfterSeconds: 0 },
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.model("Url", urlSchema);