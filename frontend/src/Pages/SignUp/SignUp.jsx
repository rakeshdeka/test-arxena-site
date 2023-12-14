// import React from 'react';
import arxenaLogo from "../../assets/arxena-logo_new.png";
import { Link } from "react-router-dom";
// import dp from "../../assets/mannan_pacha_dp.webp"
// import quote from "../../assets/quote.png"
// import quote1 from "../../assets/quote1.png"
// import linkedin from "../../assets/linkedin_logo.png"
// import eyLogo from "../../assets/EY_logo_2019.png"
// import bgimg from "../../assets/bgimg.svg"
import Aside from "../../components/Aside/Aside";
const SignUp = () => {
  return (


<div className="min-w-[380px] h-[100vh] flex  ">
  <div className=" w-[100%] sm:w-[70%] md:flex"> 
  <div className="  w-[16%] sm:w-[20%] left-0 top-0 m-4 ">
     <Link to="/">
       <img
          src={arxenaLogo}
          alt="Logo"
          className="w-full h-8 md:h-16 "
        />
        </Link>
    
  </div>
  <div className=" w-full sm:h-[90%] md:h-full  sm:w-[100%]  h-full  flex justify-center items-center">
    <div className="w-[80%] h-[100%] md:w-[70%] md:h-[80%] p-10 rounded-lg shadow-2xl flex flex-col border">
       <p className="mb-6 text-gray-700 text-[1.333325rem] leading-[2rem] text-center">
          Get started with 10 free org-chart credits.
No        credit card is needed.
    </p>

      {/* Signup Form */}
        <form className="flex flex-col justify-center items-center">
          {/* Full Name */}
          <div className="mb-4 w-[90%] h-[35px] ">
           
            <input
              type="text"
              id="fullName"
              name="fullName"
              className=" pl-2 form-input w-full border rounded-md h-full"
              placeholder="Full Name"
            />
          </div>

          {/* Phone No by Country */}
<div className="mb-4 flex w-[90%]">
<div className=" flex w-full h-[35px] ">
 <select
  id="countryCode"
  name="countryCode"
  className=" pl-2 appearance-none bg-slate-100 border border-gray-300 rounded-l-md leading-tight focus:outline-none focus:border-blue-500"
  placeholder="Mobile number"
>
  {/* Add your country code options here */}
  <option value="+1">+1🇧🇩</option>
  <option value="+44">+44🇵🇰</option>
  <option value="+91">+91🇮🇳</option>
  <option value="+81">+81🇯🇵</option>
  <option value="+33">+33🇫🇷</option>
  <option value="+49">+49🇩🇪</option>
  <option value="+86">+86🇨🇳</option>
  <option value="+7">+7🇷🇺</option>
  <option value="+55">+55🇧🇷</option>
  <option value="+52">+52🇲🇽</option>
  <option value="+91">+91🇮🇳</option>
  <option value="+234">+234🇳🇬</option>
  <option value="+27">+27🇿🇦</option>
  <option value="+61">+61🇦🇺</option>
  <option value="+82">+82🇰🇷</option>
  {/* Add more country codes as needed */}
</select>


    <input
      type="text"
      id="phone"
      name="phone"
      className="form-input pl-2 rounded-r-md border w-full h-full"
      placeholder="Mobile number"
    />
  </div>
</div>

          {/* Business Email */}
          <div className="mb-4 w-[90%] h-[35px] ">
            <input
              type="email"
              id="email"
              name="email"
              className=" pl-2 form-input w-full border rounded-md h-full"
              placeholder="Business email"
            />
          </div>

          {/* Password */}
          <div className="mb-4 w-[90%] h-[35px] ">
            <input
              type="password"
              id="password"
              name="password"
              className=" pl-2 form-input w-full border rounded-md h-full"
              placeholder="password"
            />
          </div>

          {/* I work for option */}
          <div className="mb-4 w-[90%] h-[35px] ">
 <select
  id="workFor"
  name="workFor"
  className="form-select w-full border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500"
  placeholder="I work for"
>
  <option value="" disabled selected hidden className="text-gray-500">I work for</option>
  <option value="option1">Recruitment Agency</option>
  <option value="option2">Corporate</option>
  {/* Add more options as needed */}
</select>

</div>


          {/* Create Account Button */}
          <button
            type="submit"
            className="w-[45%] sm:w-[55%] md:w-[35%] bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>
         <div className="mt-4 text-sm text-gray-600">
          <p  className="text-[1rem] text-[#c5c5cd]">
            Already registered?{' '}
            <Link to="/login">
            <a href="#" className="border-b-2 border-dotted text-[#c5c5cd] ">
              Log in instead
            </a>
            </Link>
          </p>
          <p className="mt-2 text-[1rem] text-[#c5c5cd] ">
            Account lock: We discourage license sharing. Your account will be
            accessible from this device only.
          </p>
        </div>
        </div>
  </div>
  </div>


  <Aside/>
</div>




  );
};

export default SignUp;
