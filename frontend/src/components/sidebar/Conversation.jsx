import React from "react";
import { useMessageContext } from "../../context/MessageContext.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { useSocketContext } from "../../context/SocketConext.jsx";

const Conversation = ({ user, id, name, profilepic }) => {
  const { chats, SetChats, SetSelectedUser, selectedUser } = useMessageContext();
  const { authUser } = useAuthContext();
  const { onlineUsers } = useSocketContext();

  // Check if the current user is selected
  const isSelected = selectedUser?._id === id;

  // Handle user selection
  const handleSelectUser = () => {
    SetSelectedUser(user);
    console.log(user); // Log the selected user instead of selectedUser
  };

  // Check if the user is online
  const isOnline = onlineUsers?.includes(id);

  return (
    <>
      <div
        onClick={handleSelectUser}
        className={`flex gap-2 items-center 
          ${isSelected ? "bg-[#2a64ec]" : "hover:bg-[#769df7]"} rounded p-2 py-1 cursor-pointer`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-16 rounded-full">
            <img className="" src={profilepic} alt={`${name}'s profile`} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">{name}</p>
            {/* Additional text or content can be inserted here */}
            <span className="text-xl">text additional</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 h-1"></div>
    </>
  );
};

export default Conversation;
