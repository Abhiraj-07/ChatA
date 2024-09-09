import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
export const SocketConext = createContext();

export const useSocketConext = () => {
  return useContext(SocketConext);
};
export const SocketConextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);
  const { authUser } = useAuthContext();
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:3000/", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketConext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketConext.Provider>
  );
};
