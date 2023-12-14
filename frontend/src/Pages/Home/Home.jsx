// import React from 'react'
import arxenaLogo from "../../assets/arxena-logo_new.png";
import poweredByGpt4 from"../../assets/powered_by_gpt4.png";
import tw from "../../assets/tw.png"
import fb from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin-icon-png-circle-2.png"
import yt from "../../assets/yt.png"
import { Link } from 'react-router-dom';
// import upload from "../../assets/new_upload.png"

function Home() {
  return (
    <div className='min-w-[380px] h-[100vh] flex justify-center items-center'>
        <div className="h-[95%] w-[95%]">
            <div className="h-[10%] flex justify-end gap-3">
                
                <div className=" w-[30%] sm:w-[20%] flex justify-center items-center ">
                  
                    <div className="w-[80%] h-[70%] rounded-3xl bg-[#2474cc] flex justify-center items-center cursor-pointer">
                         <Link to="/signup">
                        <p className="text-white text-[.8rem]">Sign Up</p>
                      </Link>
                    </div>
                  
                </div>
                <div className=" w-[30%] sm:w-[20%] flex justify-center items-center">
                    
                    <div className="w-[80%] h-[70%] border border-[#2474cc] hover:bg-[#2474cc] text-[blue] hover:text-white cursor-pointer rounded-3xl flex justify-center items-center">
                        <Link to="/login">
                        <p className="text-[.8rem] ">Log in</p>
                     </Link>
                    </div>
                   
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
                        <div className="h-[20%] w-[65%] sm:w-[40%] mt-8 ">
                        <input type="text" className=" bg-[#F7F7FB] shadow-lg w-full text-[.8rem] appearance-none outline-none border-none h-full rounded-3xl pl-10" placeholder="🔍 Serach any company's org chart"/>
                        {/* <div className="h-full bg-[#ffff0025]">
                             <img src={upload} alt="new_upload" className="h-full" />

                        </div> */}
                        </div>




                </div>
                <div className=" h-[40%]  flex justify-center text-sm">
                    <div className=" w-[33%] h-[11%] sm:h-[15%] sm:w-[25%] lg:w-[15%] flex justify-center items-center">
                        <img src={poweredByGpt4} alt="poweredByGpt4" className="w-full h-full" />
                    </div>
                </div>
            </div>
<div className="h-[20%] text-[.8rem]  flex justify-between  items-end flex-col md:flex-row">
  <div className=" h-[50%] w-full md:w-[90%]  flex flex-col">
    <div className="h-[50%]">
      <p className="text-[.8rem] sm:text-[.95rem] "> OrgGPT - Talent Identification Software for Ambitious Companies</p>
    </div>
    <div className="text-[blue] border border-black sm:h-[50%] flex gap-1 ">
      <a href="#" className=" border border-black">Pricing <span className="  text-[black] text-[.8rem] sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className=" border border-black">Terms of Service <span className="text-[black] text-[.8rem] sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className="border border-black">Privacy Policy <span className="text-[black] text-[.8rem] sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className=" border border-black">How to Use <span className="text-[black] text-[.8rem] sm:text-[1rem] font-bold">|</span> </a>
      <a href="#" className=" border border-black">Download Extension <span className="text-[black] text-[.8rem] sm:text-[1rem] font-bold">|</span> </a>
    </div>
  </div>

  <div className="h-[30%] flex justify-end gap-4 ">
    <div className="h-full">
      <img src={linkedin} alt="linkedin" className="w-full h-full" />
    </div>
    <div className="h-full">
      <img src={tw} alt="tweet" className="w-full h-full" />
    </div>
    <div className="h-full">
      <img src={fb} alt="fb" className="w-full h-full" />
    </div>
    <div className="h-full">
      <img src={yt} alt="youtube" className="w-full h-full" />
    </div>
  </div>
</div>

        </div>
        

    </div>
  )
}

export default Home