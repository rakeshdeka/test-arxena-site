// import React from 'react'

function Home() {
  return (
    <div className='w-[100vw] h-[100vh] bg-blue-100 flex justify-center items-center'>
        <div className="border border-black h-[95%] w-[95%]">
            <div className="border border-black h-[10%] flex justify-end">
                <div className="border border-black w-[20%]"></div>
                <div className="border border-black w-[20%]"></div>
                </div>
            <div className="border border-black h-[70%]">
                <div className="border border-black h-[40%] flex justify-center items-center flex-col">
                    <div className="border border-black h-[60%]">logo</div>
                    <div className="border border-black h-[40%]">
                        <input type="text" />
                    </div>
                </div>
                <div className="border border-black h-[60%] flex justify-center">
                    <div className="border border-black bg-green-200 w-[50%] h-[20%]"></div>
                </div>
            </div>
            <div className="border border-black h-[20%]">
                <div className="border border-black h-[50%]"></div>
                <div className="border border-black h-[50%]"></div>
            </div>
        </div>
        

    </div>
  )
}

export default Home