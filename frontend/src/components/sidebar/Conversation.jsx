import React from "react";
import { useMessageContext } from "../../context/MessageContext.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { useSocketConext } from "../../context/SocketConext.jsx";

const Conversation = ({ user, id, name, profilepic }) => {
  const { chats, SetChats, SetSelectedUser, selectedUser } =
    useMessageContext();

  const { authUser } = useAuthContext();
  let IsSelected = selectedUser?._id === id;
  let handlSelectUser = () => {
    SetSelectedUser(user);
  };

   const {onlineUsers} = useSocketConext()
   const  isOnline = onlineUsers.includes(id)
  return (
    <>
      <div
        onClick={handlSelectUser}
        className={` flex gap-2  items-center 
          ${
            IsSelected ? "bg-[#2a64ec]" : "hover:bg-[#769df7]"
          }        }rounded p-2 py-1 cursor-pointer  `}
      >
        <div className={`avatar ${isOnline?"online":""} `}>
          <div className="w-16 rounded-full">
            <img className="" src={profilepic} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className=" flex gap-3 justify-between ">
            <p className="font-bold">{name}</p>
            <span className="text-xl"> text additional</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 h-1"></div>
    </>
  );
};

export default Conversation;
