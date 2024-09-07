import { useState } from "react";
import useMessageContext from "../context/MessageContext";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const { chats } = useMessageContext();

  const getConversation = async (username) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data =await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      SetAuthUser(data);
    } catch (err) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getConversation };
};

export default useGetConversation;
