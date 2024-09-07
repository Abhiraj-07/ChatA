import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";
import { useLoadingContext } from "../../context/LoadingContext";
const MessageInput = () => {
  const { loading } = useLoadingContext();
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message) {
      return toast.error("Empty Message");
    }
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-2 my-3  " onSubmit={handleSendMessage}>
      <div className="w-full relative">
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="boder  text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white outline-none"
        ></input>
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          disabled={loading}
        >
          {" "}
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <IoSendSharp />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
