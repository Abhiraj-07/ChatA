import MessageInput from "./MessageInput";
import React from "react";
import Messages from "./Messages.jsx";
import { useMessageContext } from "../../context/MessageContext.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { useEffect } from "react";

const MessagesConatiner = () => {
  const { selectedUser, SetSelectedUser } = useMessageContext();
  let isSelected = selectedUser ? false : true;

  useEffect(() => {
    return () => {
      SetSelectedUser(null);
    };
  }, [SetSelectedUser]);

  return (
    <div className="md:min-w-[600px] grid grid-rows-[auto_1fr_auto]  h-full">
      {isSelected ? (
        <NoChatSelected></NoChatSelected>
      ) : (
        <>
          <div className="bg-[#ffffff57] px-4 py-2 mb-2">
            <span className=" label-text text-white"> To: </span>
            <span className="text-white font-extrabold">
              {selectedUser?.username}
            </span>
          </div>
          <Messages></Messages>
          <MessageInput></MessageInput>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="py-3.5 flex  items-center justify-center w-full h-full">
        <div className="px-4  text-center sm:text-lg md:text-xl text-white font-semibold flex gap-3 items-center flex-col">
          <p className="text-3xl">
            Welcome {authUser ? authUser.fullName : "User"}{" "}
          </p>
          <p className="text-xl"> Select user to start chating </p>
        </div>
      </div>
    </>
  );
};

export default MessagesConatiner;
