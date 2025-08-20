import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dishes from "./Components/Dishes";
import Login from "./Components/Login";
import Description from "./Components/Description"
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search"
function Home() {
  return (
    <h1>Home</h1>
  )
}
function About() {
  return (
    <h1>About</h1>
  )
}
function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Search /><Dishes/><Description /></>}></Route>




        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<div><Navbar/>
<div className="pt-20"><Login/></div>        </div>} />
        <Route path="/signup" element={<div>
          <Navbar/> <div className="pt-20"><Signup/></div>
        </div>} />

        <Route path="/dishes" element={<div><Navbar/><Search/><Dishes/><Description/></div>} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />

      </Routes></BrowserRouter>
  )
}

export default App
