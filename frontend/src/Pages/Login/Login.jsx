// import React from 'react';
import arxenaLogo from "../../assets/arxena-logo_new.png";
import { Link } from "react-router-dom";
import dp from "../../assets/mannan_pacha_dp.webp"
import quote from "../../assets/quote.png"
import quote1 from "../../assets/quote1.png"
import linkedin from "../../assets/linkedin_logo.png"
import eyLogo from "../../assets/EY_logo_2019.png"

const LoginPage = () => {
  return (  
<div className="min-w-[380px] h-[100vh] flex ">
  <div className=" w-[100%] sm:w-[70%] md:flex"> 
  <div className="  w-[20%] left-0 top-0 m-4  ">
     <Link to="/">
       <img
          src={arxenaLogo}
          alt="Logo"
          className="w-full h-20"
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
          <a href="#" className="text-blue-500">
            Forgot your password? Reset it here
          </a>
        </p>

        {/* Sign Up Link */}
        <p className="mt-4 text-sm text-gray-600">
          Need an account?{' '}
          <Link to="/signup">
          <a href="#" className="text-blue-500">
            Sign up for free
          </a>
          </Link>
        </p>
        
        </div>
  </div>
  </div>

  <div className=" hidden w-[30%] sm:flex sm:justify-center sm:items-center bg-gradient-to-t from-[#B8CFFF] to-[#FDFDFF]">
        <div className="w-[95%] h-[80%] border border-black">
          <div className=" h-[30%] flex justify-center items-center ">
            <div className="h-24 w-24 rounded-full ">
              <img src={dp} alt="dp" className="w-full h-full rounded-full" />
            </div>
          </div>
          <div className=" h-[10%]">
            <div className="h-full">
              <img src={quote} alt="quote" className="h-full"/>
            </div>
          </div>
          <div className="h-[25%] ">
            <p className="">Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</p>
          </div>
          <div className=" h-[5%]">
            <p>Mannan Pacha <span >|</span></p>
          </div>
          <div className=" h-[5%]">
            Manager - Ernst & Young
          </div>
          <div className=" h-[5%]">
            <div className="h-full">
              <img src={eyLogo} alt="eylogo" className="h-full" />
            </div>
          </div>
          <div className=" h-[5%] mt-5">
            <div className="h-full">
              <img src={linkedin} alt="linkedin" className="h-full" />
            </div>
          </div>
          <div className=" h-[10%]">
            <div className="h-full flex justify-end">
              <img src={quote1} alt="quote1" className="h-full"/>
            </div>
          </div>

        </div>
  </div>
</div>
  );
};

export default LoginPage;
