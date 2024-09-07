import React from "react";
import useLogout from "../../hooks/useLogout";
import { BiSolidLogOut } from "react-icons/bi";
const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto  px-2 py-2">
      {!loading ? (
        <BiSolidLogOut
          className=" w-7 h-7 on hover:bg-[#00000044] cursor-pointer"
          onClick={logout}
        />
      ) : (
        <div className="loading loading-spinner"> </div>
      )}
    </div>
  );
};

export default Logout;
