import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {

    const [eusername, seteusername] = useState("")
    const [epassword, setepassword] = useState("")
    const [ruser, setruser] = useState(true)
    const users = props.users
    const navigate = useNavigate()

    function checkuser() {

        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Suceesfulll..")
                setruser(true);
                userfound = true;
                navigate("/", {state:{user:eusername}});

            }
        });

        if (userfound === false) {
                            console.log("Login Failed..")

            setruser(false);
        }
    }

    // function handleuserinput(evt) {
    //     seteusername = evt.target.value
    // }
    // function handlepassinput(evt) {
    //     setepassword = evt.target.value
    // }
    return (
        <>

            <div className="bg-greeny p-10  text-greeny  ">
                <div className="bg-green-100 p-10 border rounded-md">
                    <h1 className="text-3xl font-medium"> Hey Hello... Welcome</h1>
                    {ruser ?
                        <p className="text-dark">Login To Get Your Dish at Correct Time  ...</p> :
                        <p className="text-red-500">Please Sign up Before You Login...</p>}
                    <div className="flex flex-col gap-2 my-2">

                        <input type="text"
                            placeholder="UserName" onChange={(evt)=>seteusername(evt.target.value)}
                            className="w-52 border-black border  bg-green-200 rounded-md p-1" />


                        <input type="text"
                            placeholder="PassWord" onChange={(evt)=>setepassword(evt.target.value)}
                            className="w-52 border-black  border bg-green-200 rounded-md p-1 bg-transparent " />

                         <button className="bg-green-400 text-dark w-24 p-1 rounded-md" onClick={checkuser} >Login</button>
                            
                        <p>Don't Have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                    </div>
                </div>
            </div></>
    )

}
export default Login