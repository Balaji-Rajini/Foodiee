import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"


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
        navigate("/")
    }


    return (
        


            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    <h1 className="text-3xl font-medium"> Hey...Hello..Welcome..</h1>

                    <p>Sign Up Here...</p>
                    <div className="flex flex-col gap-2 my-2">

                        <input type="text"
                            placeholder="UserName"
                            className="w-52 border-black border  bg-transparent rounded-md p-1"
                            onChange={(evt)=>seteusername(evt.target.value)} />


                        <input type="text"
                            placeholder="PassWord"
                            onChange={(evt)=>setepassword(evt.target.value)}
                            className="w-52 border-black  border rounded-md p-1 bg-transparent " />

                        <input type="text"
                            placeholder="Confirm Password"
                            className="w-52 border-black rounded-md p-1 border bg-transparent" />
                        <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={adduser}>Sign up</button>
                        <p>Already Have an account? <Link to={"/login"} className="underline">Login</Link></p>
                    </div>
                </div>
            </div>
        )
}
export default Signup