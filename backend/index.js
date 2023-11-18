import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import scoreRoute from "./routes/scoreRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
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

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome To MERN");
});

// TODO: Create routes middleware
app.use("/user", userRoute);
app.use("/score", scoreRoute);

// CONNECT TO DB
// =============
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
