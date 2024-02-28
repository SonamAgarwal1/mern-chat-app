import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // To parse the incoming requests with JSON payloads (from req.body in auth.controller)

// app.get("/", (req, res) => {
//   res.json({ msg: "Hello world!!!" });
// });

app.get("/", (req, res) =>
  //root route http://localhost:5000
  res.send("Hello world")
);
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on Port ${PORT}`);
});
