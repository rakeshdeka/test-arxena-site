
// import React from 'react'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const App = () => {
  return (
    <>
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
