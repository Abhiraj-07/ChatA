import { useContext, useEffect, createContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();  // Typo fix: 'SocketContext'

export const useSocketContext = () => {
  return useContext(SocketContext);  // Typo fix: 'SocketContext'
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      console.log("User ID:", authUser._id);

      const socket = io("http://localhost:8000/", {
        query: { userId: authUser._id },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        console.log("Online users:", users);
        setOnlineUsers(users);
      });

      // Clean up the socket connection on component unmount or when authUser changes
      return () => {
        socket.close();
        setSocket(null);
      };
    } else {
      console.log("No authUser, closing socket if exists");
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
