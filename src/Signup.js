import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password do not match');
      return;
    }

    
    setErrorMessage('');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple to-red">
      <div className="bg-white rounded-lg shadow-md p-8 w-full md:max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Sign Up
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
            <label htmlFor="email" className="text-xl font-bold text-gray">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="p-3 bg-gray-100 border border-gray rounded-lg w-full focus:outline-none"
              value={email}
              onChange={handleEmailChange}
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
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="text-xl font-bold text-gray"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="p-3  border border-gray rounded-lg w-full focus:outline-none"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {errorMessage && (
            <p className="text-red text-lg mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="p-3 bg-blue text-white text-xl font-bold rounded-lg w-full focus:outline-none hover:bg-blue1 transition-colors duration-300"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-700 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-blue font-bold hover:underline">
              Login
            </a>
          </p>
          <div className="flex justify-center text-center mt-4">
            <span className="text-gray">or</span>
          </div>
          <div className="flex justify-center text-center mt-4">
            <div className="flex items-center bg-blue px-4 py-2 rounded-lg">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-4xl text-white hover:text-blue cursor-pointer"
              />
              <p className="ml-2 text-white">Login with Facebook</p>
            </div>
            
          </div>
          <div className="flex justify-center text-center mt-2">
            <div className="flex items-center bg-red px-4 py-2 rounded-lg">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-4xl text-white hover:text-blue cursor-pointer"
              />
              <p className="ml-2 text-white">Login with Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
