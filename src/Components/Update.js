import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Update = () => {
  let navigate = useNavigate();
  let location = useLocation();
  //Getting Name
  // let myName = localStorage.getItem("name");
  const [newName, setNewName] = useState(location.state.val);
  const [val, setVal] = useState(location.state.val);

  //Getting Age
  // const [inputAge, setInputAge] = useState("Age");
  // let Age = localStorage.getItem("Age", myAge);
  // //Getting Programme
  // let programme = localStorage.getItem("Programme", input);
  // localStorage.setItem("name", val);

  let clickUpdate = (e) => {
    if (location.state.id === 1) {
      setVal(localStorage.setItem("name", newName));
    } else if (location.state.id === 2) {
      setVal(localStorage.setItem("Age", newName));
    } else if (location.state.id === 3) {
      setVal(localStorage.setItem("Programme", newName));
    }
    navigate("/");
  };
  const UpdateMe = (e) => {
    setNewName(e.target.value);
  };
  return (
    <>
      <input
        className="form-control "
        placeholder="Enter The Value to Change"
        value={newName}
        onChange={UpdateMe}
      />
      <button className="btn btn-primary" type="button" onClick={clickUpdate}>
        Update Value
      </button>
    </>
  );
};

export default Update;
