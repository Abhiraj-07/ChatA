import React, { useEffect } from "react";
import { useState } from "react";
import { useMessageContext } from "../context/MessageContext";
import toast from "react-hot-toast";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { SetChats, selectedUser, chats } = useMessageContext();
  useEffect(() => {
    const getMessageWithSelectedUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(`api/messages/${selectedUser._id}`);
        const data = await res.json();
        if (data.error) {
          console.log("Error occured");

          throw new Error(data.error);
        }

        SetChats(data);
      } catch (err) {
        toast.error(err.message);
        console.log("Error in get Messages");
      } finally {
        setLoading(false);
      }
    };
    if (selectedUser?._id) getMessageWithSelectedUser();
  }, [SetChats, selectedUser?._id]);

  return { chats, loading };
};

export default useGetMessages;
