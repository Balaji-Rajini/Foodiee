import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



function Signup(props) {
    const navigate = useNavigate()
    const [eusername, seteusername] = useState("");
    const [epassword, setepassword] = useState()

    const users = props.users
    const setUsers = props.setUsers


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
                            placeholder="UserName"
                            className="w-52 border-black border bg-green-200 bg-transparent rounded-md p-1"
                            onChange={(evt)=>seteusername(evt.target.value)} />


                        <input type="text"
                            placeholder="PassWord"
                            onChange={(evt)=>setepassword(evt.target.value)}
                            className="w-52 border-black  border rounded-md p-1 bg-transparent  bg-green-200" />

                        <input type="text"
                            placeholder="Confirm Password"
                            className="w-52 border-black  bg-green-200 rounded-md p-1 border bg-transparent" />
                        <button className="bg-green-400 w-24 p-1 rounded-md"  onClick={adduser}>Sign up</button>
                        <p>Already Have an account? <Link to={"/login"} className="underline">Login</Link></p>
                    </div>
                </div>
            </div>
        )
}
export default Signup