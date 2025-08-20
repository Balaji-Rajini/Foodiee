import { BrowserRouter , Routes,Route } from "react-router-dom";

import Dishes from "./Components/Dishes"; 
import Login from "./Components/Login"; 
import Description from"./Components/Description"
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search"
function Home(){
  return (
    <h1>Home</h1>
  )
}
function About(){
  return (
    <h1>About</h1>
  )
}

function App() {

        return(



          <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<><Navbar/><Search/><Description/></>}></Route>


                                    <Route path="/navbar" element={<Navbar/>}/>

                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>

            <Route path="/dishes" element={<Dishes/>}/>
                          <Route path="/about" element={<About/>}/>
            <Route path="/home" element={<Home/>}/>

              </Routes></BrowserRouter>
        )
}

export default App
