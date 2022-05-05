import { Schema, model } from "mongoose";

const hashedUrlSchema = new Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const HashedUrl = model("HashedUrl", hashedUrlSchema);

export default HashedUrl;
