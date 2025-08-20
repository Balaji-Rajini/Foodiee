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
                navigate("/Landing", {state:{user:eusername}});

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

            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    <h1 className="text-3xl font-medium"> Hey Hello... Welcome</h1>
                    {ruser ?
                        <p>I help You Manage Your Activitie Aftert You Login...</p> :
                        <p className="text-red-500">Please Sign up Before You Login...</p>}
                    <div className="flex flex-col gap-2 my-2">

                        <input type="text"
                            placeholder="UserName" onChange={(evt)=>seteusername(evt.target.value)}
                            className="w-52 border-black border  bg-transparent rounded-md p-1" />


                        <input type="text"
                            placeholder="PassWord" onChange={(evt)=>setepassword(evt.target.value)}
                            className="w-52 border-black  border rounded-md p-1 bg-transparent " />

                         <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser} >Login</button>
                            
                        <p>Don't Have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                    </div>
                </div>
            </div></>
    )

}
export default Login