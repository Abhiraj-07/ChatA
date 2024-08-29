import mongoose from "mongoose";

const messageSchaema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  reciverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  message: {
    type: String, 
    required: true,
  },

  timestamp: {
    type: String,
  },
});

const Message = mongoose.model("Message", messageSchaema);
export default Message;
