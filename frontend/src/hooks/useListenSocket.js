import { useMessageContext } from "../context/MessageContext";
import { useSocketConext } from "../context/SocketConext";

import React, { useEffect } from "react";

const useListenSocket = () => {
  const { socket } = useSocketConext();
  const { SetChats, chats } = useMessageContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      console.log("use listensocket");

      SetChats({
        ...chats, // Keep the existing chats object
        messages: [...chats.messages, newMessage], // Append the new message
      });
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, SetChats, chats]);
};

export default useListenSocket;
