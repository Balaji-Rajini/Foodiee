
import { Link } from "react-router-dom"
function Navbar(){

    return(
        <nav className="flex bg-greeny text-dark justify-between p-6 fixed w-full z-20" > 
          <h1 className=" text-3xl  font-semibold">Foodiee</h1>
          <div className=" text-xl mt-2  flex gap-8 cursor-pointer"> 
          <p>🛒Check-Out</p>
          <p>  <Link to={"/login"} className="underline">👤Login</Link>
          </p>
</div>
        </nav>
    )
}export default Navbar