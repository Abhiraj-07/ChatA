import React from "react";
import MessagesConatiner from "../../components/messages/MessagesConatiner.jsx";
import SideBar from "../../components/sidebar/SideBar.jsx";
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg shadow-md bg-black/55 backdrop-filter-blur-3xl backdrop-filter-saturate-[100%] bg-opacity-60 border-black overflow-hidden">
      <SideBar></SideBar>
      <MessagesConatiner></MessagesConatiner>
    </div>
  );
};

export default Home;
