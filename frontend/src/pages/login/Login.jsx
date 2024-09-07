import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  let handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black/55 backdrop-filter-blur-3xl backdrop-filter-saturate-[100%] bg-opacity-60 border-black ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {" "}
          Login
          <span className="text-[#406ACC]"> weChat</span>
        </h1>
        <form className="pt-3" onSubmit={handleLogin}>
          <div className="pt-3">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Enter Username "
              className="w-full input input-bordered input-primary  max-w-xs"
            ></input>
          </div>
          <div className="pt-3">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Password "
              className="w-full input input-bordered input-primary  max-w-xs"
            ></input>
          </div>
          <Link
            className="pt-2 mx-1 text-sm hover:underline hover:text-[#406ACC] inline-block"
            to={"/signup"}
          >
            {" "}
            Dont't have an Account
          </Link>
          <div className="pt-3">
            <button
              disabled={loading}
              type="submit"
              placeholder="Login "
              className="w-full text-white bg-[#406ACC] input input-bordered input-primary  max-w-xs"
            >
              {loading ? (
                <span className="loading loading-spinner"> </span>
              ) : (
                "Login"
              )}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
