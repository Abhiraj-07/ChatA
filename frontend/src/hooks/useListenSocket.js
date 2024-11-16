import { useMessageContext } from "../context/MessageContext";
import { useSocketContext } from "../context/SocketConext";
import React, { useEffect } from "react";

const useListenSocket = () => {
  const { socket } = useSocketContext(); // Fixed the typo here
  const { SetChats, chats } = useMessageContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true; // Add extra field to newMessage

      // Update the chats state by appending the new message immutably
      SetChats((prevChats) => ({
        ...prevChats, // Keep the existing chats object
        messages: [...(prevChats.messages || []), newMessage], // Append newMessage to messages
      }));

      console.log("New message received:", newMessage);
    });

    // Clean up the socket listener
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, SetChats]);

  return null;
};

export default useListenSocket;
