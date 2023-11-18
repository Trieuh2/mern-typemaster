import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// GET ALL USERS
router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({
      count: users.length,
      data: users
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// GET A USER
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);

    if (!user) {
      return response.status(404).send({ message: "User not found." });
    }
    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// CREATE A USER
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.displayName ||
      !request.body.email ||
      !request.body.username ||
      !request.body.password
    ) {
      return response.status(400).send({
        message:
          "Please send all required fields: displayName, email, username, password."
      });
    }
    // Create a new User
    const newUser = {
      displayName: request.body.displayName,
      email: request.body.email,
      username: request.body.username,
      password: request.body.password
    };
    const user = await User.create(newUser);
    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// UPDATE A USER
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.displayName ||
      !request.body.email ||
      !request.body.username ||
      !request.body.password
    ) {
      return response.status(400).send({
        message:
          "Please send all required fields: displayName, email, username, password."
      });
    }
    // Attempt to update score information
    const { id } = request.params;
    const result = await User.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response
        .status(404)
        .send({ message: "Update failed. User not found." });
    }
    response.status(200).send({ message: "User updated successfully." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE A USER
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).send({ message: "User not found" });
    }
    response.status(200).send({ message: "User deleted successfully." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;