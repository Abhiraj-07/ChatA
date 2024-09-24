import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { SetAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    let check = handleCheckForErrors({
      username,
      password,
    });
    if (!check) {
      return;
    }
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data =await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      SetAuthUser(data);
      
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
function handleCheckForErrors({ username, password }) {
  if (!username || !password) {
    toast.error("input Field missing");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password is too short ");
    return false;
  }
  return true;
}
export default useLogin;
