import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useMessageContext } from "../../context/MessageContext";
import toast from "react-hot-toast";

const SearchIput = () => {
  const { SetSelectedUser, users } = useMessageContext();

  const [search, setSearch] = useState("");
  let handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      return toast.error("Empty");
    }
    const usearFinded = users.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (usearFinded) {
      SetSelectedUser(usearFinded);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form className="flex  items-center  gap-5 w-full" onSubmit={handleSearch}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search ..."
        className=" input input-bordered rounded-full w-full"
      ></input>
      <button
        type="submit"
        className="  btn btn-circle  hover:bg-[#406acc] bg-[#406acc8d]  text-white"
      >
        <FaSearch className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchIput;
