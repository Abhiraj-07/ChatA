import React, { useContext, useEffect, useRef, useState } from "react";
import SkeletonMessage from "./SkeletonMessage";
import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages";
import useListenSocket from "../../hooks/useListenSocket.js";
const Messages = () => {
  useListenSocket();
  const { chats, loading } = useGetMessages();


  console.log(" Messages", chats);

  const chatArray = chats?.messages || [];
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [chats]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        chatArray.length > 0 &&
        chatArray.map((chat) => (
          <div key={chat._id} ref={lastMessageRef}>
            <Message message={chat} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <SkeletonMessage key={idx} />)}
      {!loading && chats.length === 0 && (
        <p className="text-center">Send a chat to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
