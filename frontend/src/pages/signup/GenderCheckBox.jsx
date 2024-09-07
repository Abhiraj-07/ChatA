import React from "react";

const GenderCheckBox = ({onChangegender,selectedgender}) => {
  return (
    <div className="flex pt-2"  >
      <div className="form-control mx-2">
        <label className={`label gap-2 cursor-pointer ${selectedgender === "male" ? "selected" :""} `}>
          <span className="label-text"> Male</span>
          <input className="checkbox" type="checkbox" 
          checked={selectedgender === "male"}
          onChange={()=>onChangegender("male")}></input>
        </label>
      </div>
      <div className="form-control mx-2">
        <label className={`label gap-2 cursor-pointer ${selectedgender === "male" ? "selected" :""} `}>
          <span className="label-text"> Female</span>
          <input className="checkbox" type="checkbox"
           checked={selectedgender === "female"}
           onChange={()=>onChangegender("female")}></input>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
