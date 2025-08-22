import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dishes from "./Components/Dishes";
import Login from "./Components/Login";
import Description from "./Components/Description"
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search"
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
function App() {

  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}></Route>



        <Route path="/checkout" element={<Checkout/>} />

        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<div><Navbar/>
<div className="pt-20"><Login/></div>        </div>} />
        <Route path="/signup" element={<div>
          <Navbar/> <div className="pt-20"><Signup/></div>
        </div>} />

        <Route path="/dishes" element={<div><Navbar/><Search/><Dishes/><Description/></div>} />

      </Routes></BrowserRouter>
  )
}

export default App
