import express from "express";
import { Score } from "../models/scoreModel.js";

const router = express.Router();

// GET ALL SCORES
router.get("/", async (request, response) => {
  try {
    const scores = await Score.find({});
    return response.status(200).json({
      count: scores.length,
      data: scores
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// GET A SCORE
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const score = await Score.findById(id);

    if (!score) {
      return response.status(404).send({ message: "Score not found." });
    }
    return response.status(200).json(score);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// CREATE A SCORE
router.post("/", async (request, response) => {
  try {
    if (!request.body.userId || !request.body.value) {
      return response.status(400).send({
        message: "Please send all required fields: userId, value."
      });
    }
    // Create a new Score
    const newScore = {
      userId: request.body.userId,
      value: request.body.value
    };
    const score = await Score.create(newScore);
    return response.status(201).send(score);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// UPDATE A SCORE
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.userId || !request.body.value) {
      return response.status(400).send({
        message: "Please send all required fields: userId, value."
      });
    }
    // Attempt to update score information
    const { id } = request.params;
    const result = await Score.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response
        .status(404)
        .send({ message: "Update failed. Score not found." });
    }
    response.status(200).send({ message: "Score updated successfully." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE A SCORE
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Score.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).send({ message: "Score not found" });
    }
    response.status(200).send({ message: "Score deleted successfully." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
