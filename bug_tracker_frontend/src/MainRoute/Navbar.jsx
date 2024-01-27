import { Link } from "react-router-dom"

function Navbar(){
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"white", height:"50px"}}>
        <Link style={{textDecoration:"none"}} to={"/auth"}>AuthRoute</Link>
        <Link style={{textDecoration:"none"}} to={"/tracker"}>Tracker</Link>
        <Link style={{textDecoration:"none"}} to={"/chat"}>Chat</Link>
        </div>
        </>
    )
}
export default Navbar