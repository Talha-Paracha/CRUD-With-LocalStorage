import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  let location = useLocation();
  // console.log(location);
  const [inputVal, setInputVal] = useState();
  const nameChange2 = (event) => {
    setInputVal(event.target.value);
  };
  let myName = location.state.name;
  //   console.log(myName);
  return (
    <>
      <h2 className="text-center">About Section</h2>
      {/* <p className="text-center mt-4">{location.pathname}</p> */}
      <p className="text-center mt-4">Your Name is {myName}</p>
      <div className="container mt-2 input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Age"
          aria-label="Recipient's Age"
          aria-describedby="button-addon2"
          onChange={nameChange2}
        />

        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => {
            navigate("/contact", {
              state: {
                name: myName,
                age: inputVal,
              },
            });
          }}
        >
          Button
        </button>
      </div>
    </>
  );
};
export default About;
