
// import './App.css'
// import { useState, useEffect } from "react"

// function App() {
//   const [data, setData] = useState({})
//   useEffect(()=>{
//     fetchData()
//   },[]);
 
//   const fetchData= async()=>{
//     try{
//       const res = await fetch("http://127.0.0.1:5000/api/data")
//       const jsonData = await res.json();
//       setData(jsonData)
//     }catch(err){
//       console.log("error",err);

//     }

//   }

//   return (
//     <>
//     <h1>Frontend</h1>
//     <h3>{data.message}</h3>

//     </>
//   )
// }

// export default App

// import React from 'react'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
    <Home/>
    </>
  )
}

export default App
