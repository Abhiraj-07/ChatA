import User from "../modals/user.modals.js";
export const getUsersForSiderBar =async (req, res) => {
  try {
    let loggedInuserId = req.user._id;

    const allUsers = await User.find().select("-password")
    return res.status(200).json(allUsers);
  } catch (err) {
    console.log("error in getUsersForSiderBar",err.message);
    
    return res.status(500).json({ error: "Internal Error" });
  }
};
