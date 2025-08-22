import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



function Signup(props) {
    const navigate = useNavigate()
    const [eusername, seteusername] = useState("");
    const [epassword, setepassword] = useState()

    const setUsers = props.setUsers

const users=[{
        username:"balaji",
        password:123
    }]

    // function handleuserinpuit(evt) {
    //     seteusername = evt.target.value
    // }
    // function handlepassinput(evt) {
    //     setepassword = evt.target.value
    // }
    function adduser() {
        setUsers([...users, { username: eusername, password: epassword }])
        navigate("/signup")
    }


    return (



        <div className="bg-greeny p-10">
            <div className="bg-green-100 p-10 border rounded-md">
                <h1 className="text-3xl font-medium"> Hey...Hello..Welcome..</h1>

                <p className="text-gray">Sign Up Here...</p>
                <div className="flex flex-col gap-2 my-2">

                    <input type="text"
                        placeholder="UserName" required
                        className="w-72 border-black border bg-green-200 bg-transparent rounded-md p-1"
                        onChange={(evt) => seteusername(evt.target.value)} />
                    <input type="number"
                        placeholder="Enter Your Mobile Number" required
                        className="w-72 border-black border bg-green-200 bg-transparent rounded-md p-1"
                        onChange={(evt) => seteusername(evt.target.value)} />
                        <input type="text"
                            placeholder="Enter Your Address " required
                            className="w-72 border-black border bg-green-200 bg-transparent rounded-md p-1"
                            onChange={(evt) => seteusername(evt.target.value)} />
<input type="email"
                            placeholder="Enter Your Mail" required
                            className="w-72 border-black border bg-green-200 bg-transparent rounded-md p-1"
                            onChange={(evt)=>seteusername(evt.target.value)} />
                    <input type="password"
                        placeholder="PassWord" required
                        onChange={(evt) => setepassword(evt.target.value)}
                        className="w-72 border-black  border rounded-md p-1 bg-transparent  bg-green-200" />

                    <input type="password" required
                        placeholder="Confirm Password" 
                        className="w-72 border-black  bg-green-200 rounded-md p-1 border bg-transparent" />
                    <button className="bg-green-400 w-24 p-2  rounded-md" onClick={adduser}><Link to={"/login"} >Signup</Link></button>
                    <p>Already Have an account? <Link to={"/login"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup