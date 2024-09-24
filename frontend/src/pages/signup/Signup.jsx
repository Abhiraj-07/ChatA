import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";
const Signup = () => {
  const [inputdata, setInputData] = useState({
    fullName: "",
    username: "",
    password: "",
    cpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  let handleCheckBoxChange = (gender) => {
    setInputData({ ...inputdata, gender });
  };
  let handleSubmitSign = async (e) => {
    e.preventDefault();
    console.log(inputdata);

    await signup(inputdata);
  };
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black/55 backdrop-filter-blur-3xl backdrop-filter-saturate-[100%] bg-opacity-60 border-black ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {" "}
          Signup
          <span className="text-[#406ACC]"> weChat</span>
        </h1>
        <form className="pt-3" onSubmit={handleSubmitSign}>
          <div className="pt-3">
            <input
              onChange={(e) =>
                setInputData({ ...inputdata, fullName: e.target.value })
              }
              value={inputdata.fullName}
              type="text"
              placeholder="Enter Full name "
              className=" w-full input input-bordered input-primary  max-w-xs"
            ></input>
          </div>
          <div className="pt-3">
            <input
              onChange={(e) =>
                setInputData({ ...inputdata, username: e.target.value })
              }
              value={inputdata.username}
              type="text"
              placeholder="Enter Username "
              className="w-full input input-bordered input-primary  max-w-xs"
            ></input>
          </div>
          <GenderCheckBox
            onChangegender={handleCheckBoxChange}
            selectedgender={inputdata.gender}
          ></GenderCheckBox>
          <div className="pt-3">
            <input
              onChange={(e) =>
                setInputData({ ...inputdata, password: e.target.value })
              }
              value={inputdata.password}
              type="password"
              placeholder="Enter Password "
              className="w-full input input-bordered input-primary  max-w-xs"
            ></input>
          </div>
          <div className="pt-3">
            <input
              onChange={(e) =>
                setInputData({ ...inputdata, cpassword: e.target.value })
              }
              value={inputdata.cpassword}
              type="password"
              placeholder="Confirm Password "
              className="w-full input input-bordered input-primary  max-w-xs"
            ></input>
          </div>

          <Link
            className="pt-2 mx-1 text-sm hover:underline hover:text-[#406ACC] inline-block"
            to={"/login"}
          >
            {" "}
            Already have an Account
          </Link>
          <div className="pt-3">
            
              <button disabled={loading}
                type="submit"
                className="text-center w-full text-white bg-[#406ACC] input input-bordered input-primary  max-w-xs"
              >{
                loading?(
                  <span className="loading loading-spinner"> </span>
                ):"Signup"
              } 
              </button>
                
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
