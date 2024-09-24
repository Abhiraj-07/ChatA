import React from "react";
import Conversations from "./Conversations.jsx";
import SearchIput from "./SearchIput.jsx";
import Logout from "./Logout.jsx";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-full">
      <SearchIput></SearchIput>
      <div className="divider px-3"></div>
      <Conversations></Conversations>
      <Logout></Logout>
    </div>
  );
};

export default SideBar;
