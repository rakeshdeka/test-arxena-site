// import React from 'react';
import arxenaLogo from "../../assets/arxena-logo_new.png";
import { Link } from "react-router-dom";
import dp from "../../assets/mannan_pacha_dp.webp"
import quote from "../../assets/quote.png"
import quote1 from "../../assets/quote1.png"
import linkedin from "../../assets/linkedin_logo.png"
import eyLogo from "../../assets/EY_logo_2019.png"
const SignUp = () => {
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
  <div className=" w-full sm:w-[100%] h-full  flex justify-center items-center border border-black">
    <div className="w-[90%] h-[100%] md:h-[90%] md:w-[70%]  p-4 rounded-lg shadow-2xl flex flex-col border gap-6">
       <p className="mb-6 text-gray-700">
          Get started with 10 free org-chart credits.
No        credit card is needed.
    </p>

      {/* Signup Form */}
        <form className="flex gap-5 flex-col">
          {/* Full Name */}
          <div className="mb-4 w-[90%]">
           
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input w-full border rounded-md"
              placeholder="Full Name"
            />
          </div>

          {/* Phone No by Country */}
<div className="mb-4 flex">
  <div className="mr-2 flex w-[90%]">
    <select
      id="countryCode"
      name="countryCode"
      className="form-select bg-slate-100 rounded-l-md"
      placeholder="Mobile number"
    >
      {/* Add your country code options here */}
      <option value="+1">+1🇧🇩</option>
      <option value="+44">+44🇵🇰</option>
      <option value="+91">+91🇮🇳</option>
      {/* Add more country codes as needed */}
    </select>
    <input
      type="text"
      id="phone"
      name="phone"
      className="form-input pl-2 rounded-r-md border w-full"
      placeholder="Mobile number"
    />
  </div>
</div>




          {/* Business Email */}
          <div className="mb-4 w-[90%]">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input w-full border rounded-md"
              placeholder="Business email"
            />
          </div>

          {/* Password */}
          <div className="mb-4 w-[90%]">
            <input
              type="password"
              id="password"
              name="password"
              className="form-input w-full border rounded-md"
              placeholder="password"
            />
          </div>

          {/* I work for option */}
          <div className="mb-4 w-[90%]">
  <select
    id="workFor"
    name="workFor"
    className="form-select w-full border"
    placeholder="I work for"
  >
    <option value="" className="text-center">I work for</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    {/* Add more options as needed */}
  </select>
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
            <Link to="/login">
            <a href="#" className="text-blue-500">
              Log in instead
            </a>
            </Link>
          </p>
          <p className="mt-2">
            Account lock: We discourage license sharing. Your account will be
            accessible from this device only.
          </p>
        </div>
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

export default SignUp;
