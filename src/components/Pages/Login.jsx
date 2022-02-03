import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../context/Postcontext";

export default function Login() {
  const [name, setName] = useState("");
  const { userLogin } = useContext(PostContext);
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();
  const handleChange = ({ target: { value } }) => {
    setName(value);
    !value.trim() ? setErrorInput(true) : setErrorInput(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(name);
    if (!name.trim()) {
      setErrorInput(true);
    } else {
      userLogin(name.trim());
      navigate("/");
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="self-center">
            <strong className="text-4xl text-primary mb-2 block">
              Facebook
            </strong>
            <p className="text-xl text-black leading-tight">
              This facebook site develped by Amr Elmeslimany by using react, you
              can add posts and interact with it just for now, I will develope
              it more in the future
            </p>
          </div>
          <div className="bg-white shadow-lg rounded p-4">
            <strong className="text-xl">Your Name</strong>
            <p>Your name will used in app and you will cant change it again</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleChange}
                className={`p-2 ${
                  errorInput ? "border-red-500" : "border-gray-200"
                } border rounded mt-4 w-full text-lg focus:outline-none`}
              />
              <button className="bg-primary w-full mt-2 py-2 px-4 text-white font-semibold text-lg rounded">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
