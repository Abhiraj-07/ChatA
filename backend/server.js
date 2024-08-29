import express from "express";
import dotenv from "dotenv";

import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/users.routes.js";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
// root
app.get("/", (req, res) => {
  res.send("hello sever");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);


app.listen(port, () => {
  connectToMongoDB();
  console.log(`server started ON PORT ${port}`);
});
``;
