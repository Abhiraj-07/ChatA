import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage,getMessages } from "../controllers/message.controller.js";
const router = express.Router();
router.get("/:Id", protectRoute, getMessages);
router.post("/send/:reciverId", protectRoute, sendMessage);

export default router;
