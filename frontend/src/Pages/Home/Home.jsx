// import React from 'react'
import arxenaLogo from "../../assets/arxena-logo_new.png";
import poweredByGpt4 from"../../assets/powered_by_gpt4.png";
import tw from "../../assets/tw.png"
import fb from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin-icon-png-circle-2.png"
import yt from "../../assets/yt.png"
import { Link } from 'react-router-dom';
import upload from "../../assets/new_upload.png"

function Home() {
  return (
    <div className='min-w-[380px] h-[100vh] flex justify-center items-center'>
        <div className="h-[95%] w-[95%]">
            <div className="h-[10%] flex justify-end gap-3">
                
          <div className="w-[30%] sm:w-[20%] flex justify-end items-center">
          <Link to="/signup" className="w-[75%] h-[60%] sm:w-[80%] md:w-[60%] sm:h-[70%] rounded-3xl bg-[#2474cc] flex justify-center items-center cursor-pointer">
          <p className="text-white text-[.8rem] sm:text-[1rem] md:text-[1.16666675rem] font-semibold">Sign Up</p>
          </Link>
        </div>
                <div className=" w-[30%] sm:w-[20%] flex justify-center items-center">
                    
                  
                        <Link to="/login" className="w-[75%] h-[60%] sm:w-[80%] md:w-[60%] sm:h-[70%] border border-[#2474cc] hover:bg-[#2474cc] text-[blue] hover:text-white cursor-pointer rounded-3xl flex justify-center items-center">
                        <p className="text-[.8rem] sm:text-[1rem] md:text-[1.16666675rem] font-semibold ">Log in</p>
                     </Link>
                   
                   
                </div>
                
                </div>
            <div className="h-[70%] ">
                <div className="h-[60%]  flex justify-center items-center flex-col ">
                    
                    <div className="  h-[20%] w-[30%] sm:w-[25%] sm:h-[30%] md:w-[15%] ">
                       <Link to="/">
                        <img src={arxenaLogo} alt="arxenaLogo" className="w-full h-full"/>
                        {/* <p>logo</p> */}
                        </Link>
                        </div>
               <div className=" bg-[#F7F7FB] h-[20%] w-[65%] sm:w-[45%] mt-8 relative flex items-center border  rounded-3xl shadow-lg">
            <input type="text"
           className="bg-[#F7F7FB]  flex-grow text-[.8rem] appearance-none outline-none border-none h-full pl-10 rounded-l-3xl"
          placeholder="🔍 Search any company's org chart" />
              <div className=" mr-8 h-[60%]">
               <img
             src={upload}
              alt="Your Alt Text"
            className=" ml-2 h-full object-cover cursor-pointer"/>
            </div>
          </div>





                </div>
                <div className=" h-[40%]  flex justify-center text-sm">
                    <div className=" w-[38%] h-[11%] sm:h-[13%] sm:w-[25%] lg:w-[13%] flex justify-center items-center">
                        <img src={poweredByGpt4} alt="poweredByGpt4" className="w-full h-full" />
                    </div>
                </div>
            </div>
<div className="h-[20%] text-[.8rem]  flex justify-between  items-end flex-col md:flex-row">
  <div className=" h-[50%] w-full md:w-[80%]  flex flex-col justify-center items-center sm:justify-start sm:items-start">
    <div className="h-[50%]">
      <p className="text-[.8rem] sm:text-[1rem] "> OrgGPT - Talent Identification Software for Ambitious Companies</p>
    </div>
    <div className="text-[blue] sm:h-[50%] flex gap-1 text-[0.8333rem] sm:gap-2">
      <a href="#" className="">Pricing <span className="  text-[black]  sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className="">Terms of Service <span className="text-[black]  sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className="">Privacy Policy <span className="text-[black] sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className="">How to Use <span className="text-[black] sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className="">Download Extension <span className="text-[black] sm:text-[1rem] font-bold">|</span> </a>
    </div>
  </div>

 <div className="h-[30%] flex justify-end gap-4">
  <div className="h-full">
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="linkedin" className="w-full h-full" />
    </a>
  </div>
  <div className="h-full">
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img src={tw} alt="tweet" className="w-full h-full" />
    </a>
  </div>
  <div className="h-full">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <img src={fb} alt="fb" className="w-full h-full" />
    </a>
  </div>
  <div className="h-full">
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
      <img src={yt} alt="youtube" className="w-full h-full" />
    </a>
  </div>
</div>

</div>

        </div>
        

    </div>
  )
}

export default Home