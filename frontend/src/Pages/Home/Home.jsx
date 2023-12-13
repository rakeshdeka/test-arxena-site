// import React from 'react'
import arxenaLogo from "../../assets/arxena-logo.jpg";
import poweredByGpt4 from"../../assets/powered_by_gpt4.png";
import tw from "../../assets/tw.png"
import fb from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin-icon-png-circle-2.png"
import yt from "../../assets/yt.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-w-[380px] h-[100vh]  flex justify-center items-center'>
        <div className="border border-black h-[95%] w-[95%]">
            <div className="border border-black h-[10%] flex justify-end gap-3">
                
                <div className="border border-black w-[30%] flex justify-center items-center ">
                  
                    <div className="w-[80%] h-[70%] border rounded-3xl bg-[#2474cc] flex justify-center items-center cursor-pointer">
                         <Link to="/signup">
                        <p className="text-white text-[.8rem]">Sign Up</p>
                      </Link>
                    </div>
                  
                </div>
                <div className="border border-black w-[30%] flex justify-center items-center">
                    
                    <div className="w-[80%] h-[70%] border border-[#2474cc] hover:bg-[#2474cc] text-[blue] hover:text-white cursor-pointer rounded-3xl flex justify-center items-center">
                        <Link to="/login">
                        <p className="text-[.8rem] ">Log in</p>
                     </Link>
                    </div>
                   
                </div>
                
                </div>
            <div className="border border-black h-[60%]">
                <div className="border border-black h-[40%] flex justify-center items-center flex-col">
                    
                    <div className="border border-black h-[50%] w-[30%]">
                       <Link to="/">
                        <img src={arxenaLogo} alt="arxenaLogo" className="w-full h-full"/>
                        {/* <p>logo</p> */}
                        </Link>
                        </div>
                    <div className="border border-black h-[22%] rounded-3xl bg-black">
                        <input type="text" className=" bg-[#F7F7FB] appearance-none outline-none border-none h-full rounded-3xl pl-10" placeholder="Serach any compnay"/>
                    </div>
                </div>
                <div className="border border-black h-[60%] flex justify-center text-sm">
                    <div className=" w-[45%] h-[10%] flex justify-center items-center">
                        <img src={poweredByGpt4} alt="poweredByGpt4" className="w-full h-full" />
                    </div>
                </div>
            </div>
            <div className="border border-black h-[30%] text-[.8rem]">
                <div className="border border-black h-[50%]">
                    <div className="border border-black h-[50%]">
                        <p className="text-[.95rem]">OrgGPT - Talent Identification Software for Ambitious Companies</p>
                    </div>
                    <div className="border text-[blue] border-black h-[50%] flex gap-2">
                        <a href="#" className="border-r-2 border-black">Pricing</a>
                        <a href="#" className="border-r-2 border-black">Terms of Service</a>
                        <a href="#" className="border-r-2 border-black">Privacy Policy</a>
                        <a href="#" className="border-r-2 border-black">How to Use</a>
                        <a href="#" className="border-r-2 border-black">Download Extension</a>
                    </div>
                </div>
               
                <div className="border border-black h-[20%] flex justify-end gap-4">
                    <div className="border border-black h-full">
                        <img src={linkedin} alt="linkedin" className="w-full h-full" />
                    </div>
                    <div className="border border-black h-full">
                        <img src={tw} alt="tweet" className="w-full h-full"/>
                    </div>
                    <div className="border border-black h-full">
                        <img src={fb} alt="fb" className="w-full h-full" />
                    </div>
                    <div className="border border-black h-full">
                        <img src={yt} alt="youtube" className="w-full h-full" />
                    </div>
                    
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Home