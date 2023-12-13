// import React from 'react';
import arxenaLogo from "../../assets/arxena-logo.jpg";
import { Link } from "react-router-dom";

const LoginPage = () => {
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

      {/* Middle Section - Login Form */}
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        {/* Welcome back! */}
        <p className="mb-6 text-gray-700 text-2xl font-semibold">
          Welcome back!
        </p>

        {/* Login Form */}
        <form>
          {/* Email */}
          <div className="mb-4">
            
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder='Email'
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            {/* <label htmlFor="password" className="block text-gray-600">
              Password
            </label> */}
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder='Password'
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password Link */}
        <p className="mt-2 text-sm text-gray-600">
          <a href="#" className="text-blue-500">
            Forgot your password? Reset it here
          </a>
        </p>

        {/* Sign Up Link */}
        <p className="mt-4 text-sm text-gray-600">
          Need an account?{' '}
          <a href="#" className="text-blue-500">
            Sign up for free
          </a>
        </p>
      </div>

      {/* Right Section - Photo */}
      <div className="md:block ml-4 md:w-1/2 h-full">
        <img
          src="https://images.pexels.com/photos/117602/pexels-photo-117602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default LoginPage;
