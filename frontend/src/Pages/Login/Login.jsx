// import React from 'react';
import arxenaLogo from "../../assets/arxena-logo_new.png";
import { Link } from "react-router-dom";
// import dp from "../../assets/mannan_pacha_dp.webp"
// import quote from "../../assets/quote.png"
// import quote1 from "../../assets/quote1.png"
// import linkedin from "../../assets/linkedin_logo.png"
// import eyLogo from "../../assets/EY_logo_2019.png"
import Aside from "../../components/Aside/Aside";
const LoginPage = () => {
  return (  
<div className="min-w-[380px] h-[100vh] flex ">
  <div className=" w-[100%] sm:w-[70%] md:flex"> 
  <div className="  w-[20%] left-0 top-0 m-4  ">
     <Link to="/">
       <img
          src={arxenaLogo}
          alt="Logo"
          className="w-full h-10 md:h-16"
        />
        </Link>
    
  </div>
  <div className=" w-full sm:w-[100%] h-full  flex justify-center items-center">
    <div className="w-[70%] h-[50%]  p-4 rounded-lg shadow-2xl flex justify-center items-center flex-col">
      <p className="mb-6 text-gray-700 text-2xl font-semibold">
          Welcome back!
        </p>

        {/* Login Form */}
        <form className="w-[90%] flex justify-center items-center flex-col">
          {/* Email */}
          <div className="mb-4 w-full ">
            
            <input
              type="email"
              id="email"
              name="email"
              className="form-input pl-2 rounded-lg border w-full"
              placeholder='Email'
            />
          </div>

          {/* Password */}
          <div className="mb-4 w-full">
            
            <input
              type="password"
              id="password"
              name="password"
              className="form-input pl-2 rounded-lg border w-full"
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
          <a href="#" className=" text-[1rem] text-[#c5c5cd]">
            Forgot your password? Reset it here
          </a>
        </p>

        {/* Sign Up Link */}
        <p className="mt-4 text-sm  text-[1rem] text-[#c5c5cd]">
          Need an account?{' '}
          <Link to="/signup">
          <a href="#" className=" text-[1rem] text-[#c5c5cd]">
            Sign up for free
          </a>
          </Link>
        </p>
        
        </div>
  </div>
  </div>

 
  <Aside/>
</div>
  );
};

export default LoginPage;
