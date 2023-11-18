// TODO: Introduce password changing and hashing
// OPTIONAL: Add email validation regex

import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 64
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
      // Add email validation regex if needed
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 64
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Optional: Pre-save hook to hash password
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

export const User = mongoose.model("User", userSchema);
