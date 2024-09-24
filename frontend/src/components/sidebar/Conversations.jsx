import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Conversation from "./Conversation.jsx";
import { useMessageContext } from "../../context/MessageContext.jsx";

const Conversations = () => {
  const { SetSelectedUser, SetChats, selectedUser, users, setUsers } =
    useMessageContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    console.log(selectedUser);
    
=======
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
    const getuser = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error, "getusers Error");
        }
        setUsers(data);
      } catch (err) {
        toast.error(err.message, "getuser Error 2");
      } finally {
        setLoading(false);
      }
    };
    // here i need to set the chats w=hen the selecteduser changes

    getuser();
    return () => {
      SetSelectedUser(null);
    };
  }, [SetSelectedUser]);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner"> </span>
      ) : users.length > 0 ? (
        users.map((ele) => (
          <Conversation
            user={ele}
            key={ele._id}
            id={ele._id}
            name={ele.fullName}
            profilepic={ele.profilepic}
          />
        ))
      ) : (
        <div>No users</div>
      )}
    </div>
  );
};

export default Conversations;
