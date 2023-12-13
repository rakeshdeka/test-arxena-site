// import React from 'react';
import arxenaLogo from "../../assets/arxena-logo.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Left Section - Logo */}
      <div className="absolute left-0 top-0 m-4">
        <Link to="/">
        <img
          src={arxenaLogo}
          alt="Logo"
          className="w-12 h-12"
        />
        </Link>
      </div>

      {/* Middle Section - Signup Form */}
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        {/* Paragraph */}
        <p className="mb-6 text-gray-700">
          Welcome! Please fill in the form to create your account.
        </p>

        {/* Signup Form */}
        <form>
          {/* Full Name */}
          <div className="mb-4">
           
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              placeholder="Full Name"
            />
          </div>

          {/* Phone No by Country */}
        <div className="mb-4 flex">
            <div className="mr-2">
              <select
                id="countryCode"
                name="countryCode"
                className="form-select"
                placeholder="mobile number"
              >
                {/* Add your country code options here */}
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                {/* Add more country codes as needed */}
              </select>
            </div>
            </div>

          {/* Business Email */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Business email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="password"
            />
          </div>

          {/* I work for option */}
          <div className="mb-4">
            <input
              type="text"
              id="workFor"
              name="workFor"
              className="form-input"
              placeholder="I work for"
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>
         <div className="mt-4 text-sm text-gray-600">
          <p>
            Already registered?{' '}
            <a href="#" className="text-blue-500">
              Log in instead
            </a>
          </p>
          <p className="mt-2">
            Account lock: We discourage license sharing. Your account will be
            accessible from this device only.
          </p>
        </div>
      </div>

      {/* Right Section - Photo */}
     <div className=" md:block ml-4 md:w-1/2 bg-black w-[30%] h-full">
        <img
          src="https://images.pexels.com/photos/117602/pexels-photo-117602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo"
          className="w-full h-full object-cover rounded"
        />
      </div>
      
    </div>
  );
};

export default SignUp;
