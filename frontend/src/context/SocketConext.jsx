<<<<<<< HEAD
import { useContext, useEffect, createContext, useState } from "react";
=======
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
export const SocketConext = createContext();

export const useSocketConext = () => {
  return useContext(SocketConext);
};
export const SocketConextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
<<<<<<< HEAD
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
    console.log(onlineUsers);

    if (authUser) {
      console.log(authUser._id);
      const socket = io("http://localhost:8000/", {
=======
  const [onlineUsers, setOnlineUsers] = useState(null);
  const { authUser } = useAuthContext();
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:3000/", {
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
        query: {
          userId: authUser._id,
        },
      });
<<<<<<< HEAD
      console.log(socket);
      console.log(onlineUsers);

      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        console.log("online users");

        console.log("online users " + users);
        console.log("online users " + onlineUsers);
=======
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
<<<<<<< HEAD
      console.log("othetr part oif id ");

      socket.close();
      setSocket(null);
=======
      if (socket) {
        socket.close();
        setSocket(null);
      }
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
    }
  }, [authUser]);

  return (
    <SocketConext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketConext.Provider>
  );
};
