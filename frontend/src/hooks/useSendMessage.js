import { useMessageContext } from "../context/MessageContext";
import { useLoadingContext } from "../context/LoadingContext";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const { setLoading } = useLoadingContext();
  const { chats, SetChats, selectedUser } = useMessageContext();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`api/messages/send/${selectedUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();
      console.log("data from send message", data);

      if (data.error) throw new Error(data.error);
      const updatedChats = {
        ...chats,
        messages: [...chats.messages, data], // Append the new message while keeping other details
      };
      SetChats(updatedChats);
<<<<<<< HEAD
      console.log(" arrays is" + Array.isArray(updatedChats));

=======
>>>>>>> 37dd2261f07498d07ac297e120f4ffbcc5d1d5e3
      console.log(" send message ", chats);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage };
};

export default useSendMessage;
