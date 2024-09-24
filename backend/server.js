import express from "express";
import dotenv from "dotenv";

import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/users.routes.js";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { server, app } from "./socket/socket.js";

import path from "path";

const __dirname = path.resolve();

dotenv.config();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cookieParser());
// root

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(port, () => {
  connectToMongoDB();
  console.log(`server started ON PORT ${port}`);
});
``;
