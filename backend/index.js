import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import scoreRoute from "./routes/scoreRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

const app = express();

// Middleware configuration
// ========================
app.use(express.json());

const options = {
  origin: [
    "http://localhost:3000",
    "http://localhost:60760",
    "http://10.0.0.141:60760"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
};
app.use(cors());

// API Route Handlers
// ==================
app.use("/user", userRoute);
app.use("/score", scoreRoute);

// DB Connection and Server Initialization
// =======================================
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB.");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
