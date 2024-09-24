import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
<<<<<<< HEAD
    // during local host
    // origin: "http://localhost:3000",
// after deployment 
    origin: "https://chatapp-zgg5.onrender.com",

=======
    origin: "http://localhost:3000",
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
    methods: ["GET", "POST"],
  },
});
export const getReciverSocketId = (id) => {
<<<<<<< HEAD
  console.log("reciver Socket id" + id);
=======
  console.log("reciver Socket id");
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3

  return userSocketMap[id];
};

const userSocketMap = {};

io.on("connection", (socket) => {
<<<<<<< HEAD
  console.log(" a new user connected", socket.id);
=======
  console.log(" a user connected", socket.id);
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  socket.on("disconnect", () => {
<<<<<<< HEAD
    console.log("userDisconnected" + socket.id), socket.id;
=======
    console.log("userDisconnected"), socket.id;
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
export { app, io, server };
