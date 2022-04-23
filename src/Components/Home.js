import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  let location = useLocation();
  //Input Field
  const [inputValue, setInputValue] = useState();
  const nameChange = (e) => {
    setInputValue(e.target.value);
  };

  const changeName = (e) => {
    if (e.target.id === "btn-1") {
      navigate("/update", {
        state: {
          id: 1,
          val: myName,
        },
      });
    } else if (e.target.id === "btn-2") {
      navigate("/update", {
        state: {
          id: 2,
          val: fullAge,
        },
      });
    } else if (e.target.id === "btn-3") {
      navigate("/update", {
        state: {
          id: 3,
          val: prog,
        },
      });
    }
  };
  //Getting Local Storage Items
  let myName = localStorage.getItem("name");
  let myAge = localStorage.getItem("Age");
  let programe = localStorage.getItem("Programme");
  // console.log(programe);

  const [fullName, setFullName] = useState(myName);
  const [fullAge, setFullAge] = useState(myAge);
  const [prog, setProg] = useState(programe);

  const deleteName = (e) => {
    if (e.target.id === "name") {
      setFullName(localStorage.removeItem("name"));
    } else if (e.target.id == "age") {
      setFullAge(localStorage.removeItem("Age"));
    } else if (e.target.id === "programme") {
      setProg(localStorage.removeItem("Programme"));
    } else {
      setFullAge(localStorage.clear());
      setFullName(localStorage.clear());
      setProg(localStorage.clear());
    }
  };

  return (
    <>
      <h2 className="text-center">Home Section</h2>

      <p className="text-center mt-4">
        Your Name is : {fullName}
        <button
          className="btn btn-primary mx-2"
          id="btn-1"
          onClick={changeName}
        >
          update Element
        </button>
        <button className="btn btn-danger mx-3" id="name" onClick={deleteName}>
          Delete Element
        </button>
      </p>

      <p className="text-center mt-4">
        Your Age is : {fullAge}
        <button
          className=" mx-2 btn btn-primary"
          id="btn-2"
          onClick={changeName}
        >
          update Element
        </button>
        <button className="btn btn-danger mx-3" id="age" onClick={deleteName}>
          Delete Element
        </button>
      </p>
      <p className="text-center mt-4">
        Your Programe is : {prog}
        <button
          className=" mx-2 btn btn-primary"
          id="btn-3"
          onClick={changeName}
        >
          update Element
        </button>
        <button
          className="btn btn-danger mx-3"
          id="programme"
          onClick={deleteName}
        >
          Delete Element
        </button>
      </p>
      <div className="container mt-5 input-group mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Recipient's username"
          onChange={nameChange}
        />
        <button
          className="btn btn-outline-secondary me-2"
          type="button"
          onClick={() => {
            navigate("/about", { state: { name: inputValue } });
          }}
        >
          Add Element
        </button>

        <button className="btn btn-success" onClick={deleteName}>
          Delete All
        </button>
      </div>
    </>
  );
};
export default Home;
