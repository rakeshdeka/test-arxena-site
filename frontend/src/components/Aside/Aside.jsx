// import React from 'react'
import dp from "../../assets/mannan_pacha_dp.webp"
import quote from "../../assets/quote.webp"
import quote1 from "../../assets/quote1.png"
import linkedin from "../../assets/linkedin_logo.png"
import eyLogo from "../../assets/EY_logo_2019.png"

const Aside = () => {
  return (
    <>
     <div className=" hidden w-[30%] sm:h-[780px] md:h-full sm:flex sm:justify-center sm:items-center bg-gradient-to-t from-[#B8CFFF] to-[#FDFDFF]"  >
        <div className="w-[95%] h-[80%]">
          <div className=" h-[30%] flex justify-center items-center ">
            <div className="h-24 w-24 rounded-full ">
              <img src={dp} alt="dp" className="w-full h-full rounded-full" />
            </div>
          </div>
          <div className=" h-[5%]">
            <div className="h-full">
              <img src={quote} alt="quote" className="h-full"/>
            </div>
          </div>
          <div className="h-[25%] ">
            <p className="text-[#212529] text-[1rem]"> <i>Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</i> </p>
          </div>
          <div className=" h-[5%]">
            <p className=" font-bold">Mannan Pacha <span >|</span></p>
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
          <div className=" h-[5%]">
            <div className="h-full flex justify-end">
              <img src={quote1} alt="quote1" className="h-full"/>
            </div>
          </div>

        </div>
  </div>
    </>
  )
}

export default Aside