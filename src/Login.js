import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple to-red">
      <div className="bg-white rounded-lg shadow-md p-8 w-full md:max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="text-xl font-bold text-gray">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="p-3 bg-gray-100 border border-gray rounded-lg w-full focus:outline-none"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-xl font-bold text-gray">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="p-3  border border-gray rounded-lg w-full focus:outline-none"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex justify-end mb-2">
          <Link to="/forgotpassword">
            <button
              type="button"
              className="text-lg text-gray font-bold hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
            </Link>
          </div>

          <button
            type="submit"
            className="p-3 bg-blue text-white text-xl font-bold rounded-lg w-full focus:outline-none hover:bg-blue-600 transition-colors duration-300"
          >
            LOGIN
          </button>

          <div className="flex flex-col items-center mt-4">
            <span className="text-lg text-gray font-bold mb-2">
              or Sign Up Using
            </span>
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-4xl text-violetlogo hover:text-blue cursor-pointer mx-2"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-4xl text-blue hover:text-blue cursor-pointer mx-2"
              />
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-4xl text-red hover:text-blue cursor-pointer mx-2"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
