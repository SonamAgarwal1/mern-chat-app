import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // To parse the incoming requests with JSON payloads (from req.body in auth.controller)
app.use(cookieParser()); // To be able to read cookies

// app.get("/", (req, res) => {
//   res.json({ msg: "Hello world!!!" });
// });

app.get("/", (req, res) =>
  //root route http://localhost:5000
  res.send("Hello world")
);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on Port ${PORT}`);
});
