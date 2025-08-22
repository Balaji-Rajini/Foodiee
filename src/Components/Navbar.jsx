import { FaUtensils, FaUnlockAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"
function Navbar() {

    return (
        <nav className="flex bg-greeny text-dark justify-between p-6 fixed w-full z-20" >
            <div className="flex items-center px-2 ">
                <h1 className=" text-3xl  font-semibold">Foodiee...  </h1>
                <FaUtensils />          </div>
            <div className=" text-xl mt-2  flex gap-8 cursor-pointer">

                    <p><Link to={"/checkout"} >CheckOut</Link><FaShoppingCart /></p>
            
                <p>  <Link to={"/login"} className="" >Login<FaUnlockAlt/></Link>
                </p>
            </div>
        </nav>
    )
} export default Navbar