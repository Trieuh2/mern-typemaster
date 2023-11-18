import mongoose from "mongoose";

const scoreSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Score = mongoose.model("Score", scoreSchema);
