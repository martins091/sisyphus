import React, { useState } from "react";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";
import axios from "axios";
import md5 from 'md5';
import { useNavigate } from "react-router-dom";


const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    mobile: "",
  });

  const [focusState, setFocusState] = useState({
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    mobile: false,
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFocus = (field) => {
    setFocusState({ ...focusState, [field]: true });
  };

  const handleBlur = (field) => {
    setFocusState({ ...focusState, [field]: false });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/home")
  
    // Generate the Security-Key
    const securityKey = md5('TBC' + '|' + 'eyJyNzMyZTEzNGMyMTg5NTEiiOjE1ODAzODQyNTA3MDN9');
  
    // Define the request headers
    const headers = {
      'Content-Type': 'application/json',
      'Security-Key': securityKey
    };
  
    try {
      console.log('Request Body:', formData);
      console.log('Request Headers:', headers);
      const response = await axios.post('http://localhost:5000/signup', formData, { headers: headers });
  
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
};


  return (
    <div className="px-4 mx-auto mt-14 max-w-lg sm:px-0">
      <h1 className="text-3xl font-bold mb-4 ">Sign Up</h1>
      <button className="w-full bg-[#F3F6F9] text-black text-xs font-bold py-2 rounded-md mt-6 flex space-x-2 items-center justify-center mb-2">
        <img src="google.png" alt="google" className="w-6 h-6" />
        <p> Sign up with Google</p>
      </button>
      <div className="flex space-x-4 mb-6 ">
        <p className="w-60 border-b-2"></p>
        <p className="-mb-2 text-gray-400">on</p>
        <p className="w-60 border-b-2"></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="mt-1 relative">
            <label
              htmlFor="email"
              className={`block text-md font-semibold text-gray-400 absolute transition-all ${
                focusState.email || formData.email
                  ? "-top-2 left-4 text-xs mt-3 mb-2"
                  : "top-1 left-4 text-sm mt-3"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-5 border border-gray-300 font-bold rounded-xl shadow-sm focus:ring-indigo-500 sm:text-sm focus:outline-none ${
                focusState.email ? "focus-visible" : ""
              }`}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
            />
          </div>
          <p className="text-gray-400 font-semibold text-xs mt-1.5 ml-4">
            Please enter your email ID
          </p>
        </div>
        <div className="mb-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="mt-1 relative">
                <label
                  htmlFor="firstName"
                  className={`block text-md font-semibold text-gray-400 absolute transition-all ${
                    focusState.firstName || formData.firstName
                      ? "-top-2 left-4 text-xs mt-3 mb-2"
                      : "top-1 left-4 text-sm mt-3"
                  }`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-5 border border-gray-300 font-bold rounded-xl shadow-sm focus:ring-indigo-500 sm:text-sm focus:outline-none ${
                    focusState.firstName ? "focus-visible" : ""
                  }`}
                  onFocus={() => handleFocus("firstName")}
                  onBlur={() => handleBlur("firstName")}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="mt-1 relative">
                <label
                  htmlFor="lastName"
                  className={`block text-md font-semibold text-gray-400 absolute transition-all ${
                    focusState.lastName || formData.lastName
                      ? "-top-2 left-4 text-xs mt-3 mb-2"
                      : "top-1 left-4 text-sm mt-3"
                  }`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-5 border border-gray-300 font-bold rounded-xl shadow-sm focus:ring-indigo-500 sm:text-sm focus:outline-none ${
                    focusState.lastName ? "focus-visible" : ""
                  }`}
                  onFocus={() => handleFocus("lastName")}
                  onBlur={() => handleBlur("lastName")}
                />
              </div>
            </div>
          </div>
          <p className="text-gray-400 font-semibold text-xs mt-1.5 ml-4">
            Make sure it matches the number on your PAN card
          </p>
        </div>
        <div className="mb-6">
          <div className="mt-1 relative">
            <label
              htmlFor="password"
              className={`block text-md font-semibold text-gray-400 absolute transition-all ${
                focusState.password || formData.password
                  ? "-top-2 left-4 text-xs mt-3 mb-2"
                  : "top-1 left-4 text-sm mt-3"
              }`}
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-5 border border-gray-300 font-bold rounded-xl shadow-sm focus:ring-indigo-500 sm:text-sm focus:outline-none ${
                focusState.password ? "focus-visible" : ""
              }`}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
            />
            <button
              type="button"
              className="absolute right-5 top-1/2 transform -translate-y-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <PiEyeSlashThin size={25} />
              ) : (
                <PiEyeThin size={25} />
              )}
            </button>
          </div>
          <p className="text-gray-400 font-semibold text-xs mt-1.5 ml-4">
            Make sure it contains at least 8 characters, a number, or symbol
          </p>
        </div>

        <div className="mb-6">
          <div className="mt-1 relative">
            <label
              htmlFor="mobile"
              className={`block text-md font-semibold text-gray-400 absolute transition-all ${
                focusState.mobile || formData.mobile
                  ? "-top-2 left-20 text-xs mt-3 mb-2"
                  : "top-1 left-20 text-sm mt-3"
              }`}
            >
              Mobile
            </label>
            <div className="flex justify-start space-x-0 items-center border border-t-0 border-gray-300 py-1 px-1 rounded-xl ">
              <span className=" text-sm font-bold bg-[#F3F6F9] -my-4 -ml-1 py-5 pl-6 pr-4 text-gray-400 rounded-xl">
                +91
              </span>
              <input
                type=""
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-3 py-4 font-bold focus:ring-indigo-500 sm:text-sm focus:outline-none ${
                  focusState.mobile ? "focus-visible" : ""
                }`}
                onFocus={() => handleFocus("mobile")}
                onBlur={() => handleBlur("mobile")}
              />
            </div>
          </div>
          <p className="text-gray-400 font-semibold text-xs mt-1.5 ml-4">
            You will receive an OTP on your number
          </p>
        </div>

        <div className="text-xs text-gray-600 font-semibold my-4">
          <p>
            By selecting Agree and continue, I agree to Spar{" "}
            <span className="text-indigo-600">Terms of Service</span> &{" "}
            <span className="text-indigo-600">
              Privacy <br />
              Policy.
            </span>
          </p>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-xs font-medium text-white bg-[#36B37E] rounded-md mt-2 focus:outline-none"
        >
          Agree and Continue
        </button>
        <div className="flex justify-center items-center">
          <p className="text-xs mt-4 mb-6 text-gray-600 font-semibold">
            Already have an account?{" "}
            <span className="text-indigo-600 cursor-pointer" onClick={navigate("/signin")}>Login</span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
