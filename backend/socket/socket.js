import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // during local host
    // origin: "http://localhost:3000",
// after deployment 
    origin: "https://chatapp-zgg5.onrender.com",

    methods: ["GET", "POST"],
  },
});
export const getReciverSocketId = (id) => {
  console.log("reciver Socket id" + id);

  return userSocketMap[id];
};

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log(" a new user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  socket.on("disconnect", () => {
    console.log("userDisconnected" + socket.id), socket.id;
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
export { app, io, server };
