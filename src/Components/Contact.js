import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Contact = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const myName = location.state.name;
  let myAge = location.state.age;

  //   console.log(myName);
  let [input, setInput] = useState();
  const navigatToHome = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };
  const valueEntered = () => {
    localStorage.setItem("name", myName);
    localStorage.setItem("Age", myAge);
    localStorage.setItem("Programme", input);
    /*Navgate to the home Page All the Data */
    navigate("/", {
      state: {
        name: myName,
        age: myAge,
        text: input,
      },
    });
  };

  return (
    <>
      <h2 className="text-center">Contact Section</h2>
      {/* <p className="text-center mt-4">{location.pathname}</p> */}
      <p className="text-center mt-4">Your Name is {myName}</p>
      <p className="text-center mt-4">Your Age is {myAge}</p>
      <div className="container mt-5 input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Please Enter your Programe"
          aria-label="Recipient's Programe"
          aria-describedby="button-addon2"
          onChange={navigatToHome}
        />

        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={valueEntered}
        >
          Button
        </button>
      </div>
    </>
  );
};
export default Contact;
