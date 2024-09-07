import { useAuthContext } from "../../context/AuthContext.jsx";
import { useMessageContext } from "../../context/MessageContext.jsx";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedUser } = useMessageContext();
  let fromMe = message.senderId === authUser._id;
  const profilePic = fromMe ? authUser.profilepic : selectedUser.profilepic;
  const dateTime = new Date(message.createdAt);
  const shouldShake = message.shouldShake ? "shake" : "";
  return (
    <>
      <div className={`chat  ${fromMe ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={profilePic} />
          </div>
        </div>
        <div className="chat-header">
          {/* {`${fromMe ? authUser?.fullName : selectedUser?.fullName}`} */}
          <time className="text-xs opacity-50">
            {dateTime.toLocaleTimeString()}
          </time>
        </div>
        <div
          className={`chat-bubble text-white ${
            fromMe ? "bubleBgColor" : ""
          } ${shouldShake}`}
        >
          {message.message}
        </div>
      </div>
    </>
  );
};

export default Message;
