import { Link } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"

function AuthRoute(){
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
           <Link style={{textDecoration:"none"}} to={"/login"}>login</Link>
           <Link style={{textDecoration:"none"}} to={"/signup"}>Signup</Link>
        </div>
        </>
    )
}
export default AuthRoute