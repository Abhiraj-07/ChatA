import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
const {SetAuthUser}= useAuthContext()
  const signup = async ({
    fullName,
    username,
    password,
    cpassword,
    gender,
  }) => {
    let check = handleCheckForErrors({
      fullName,
      username,
      password,
      cpassword,
      gender,
    });
    if (!check) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          cpassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      SetAuthUser(data)
    } catch (err) {
      toast.error(`Sign up failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

function handleCheckForErrors({
  fullName,
  username,
  password,
  cpassword,
  gender,
}) {
  if (!fullName || !username || !password || !cpassword || !gender) {
    toast.error("input Field missing");
    return false;
  }
  if (password !== cpassword) {
    toast.error("Password and Confirm Password does not match ");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password is too short ");
    return false;
  }
  return true;
}
export default useSignup;
