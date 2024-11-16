import React, { useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";
import { useLoadingContext } from "../../context/LoadingContext";
const MessageInput = () => {
  const { loading, setEmoji, emoji } = useLoadingContext();
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
    <>
      {emoji && (
        <EmojiPicker
        onEmojiClick={(e) => {
            console.log(e.emoji);
            setEmoji(false);
            setMessage((prev) => prev + e.emoji);
          }}
        />
      )}
      <form className="px-2 my-3  " onSubmit={handleSendMessage}>
        <div className="w-full relative">
          <MdEmojiEmotions
            onClick={() => setEmoji((prev) => !prev)}
            size={30}
            className="  absolute inset-y-1 end-10 flex items-center  cursor-pointer p-1 rounded-full transition-colors hover:bg-[rgba(59,130,246,0.5)]"
          />
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
              <>
                <IoSendSharp
                  onClick={() => setEmoji(false)}
                  size={30}
                  className="cursor-pointer p-1 rounded-md  transition-colors hover:bg-[rgba(59,130,246,0.5)]"
                />
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageInput;
