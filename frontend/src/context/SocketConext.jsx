import { useContext, useEffect, createContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
export const SocketConext = createContext();

export const useSocketConext = () => {
  return useContext(SocketConext);
};
export const SocketConextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
    console.log(onlineUsers);

    if (authUser) {
      console.log(authUser._id);
      const socket = io("http://localhost:8000/", {
        query: {
          userId: authUser._id,
        },
      });
      console.log(socket);
      console.log(onlineUsers);

      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        console.log("online users");

        console.log("online users " + users);
        console.log("online users " + onlineUsers);
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      console.log("othetr part oif id ");

      socket.close();
      setSocket(null);
    }
  }, [authUser]);

  return (
    <SocketConext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketConext.Provider>
  );
};
