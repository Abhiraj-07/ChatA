import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? "https://chatapp-zgg5.onrender.com"
        : "http://localhost:3000", // for local development
    methods: ["POST"],
  },
});

const userSocketMap = {};

export const getReceiverSocketId = (id) => {
  console.log("Receiver Socket ID: " + id);
  return userSocketMap[id];
};

io.on("connection", (socket) => {
  console.log("A new user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
