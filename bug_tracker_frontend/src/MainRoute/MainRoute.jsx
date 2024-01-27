import { Route, Routes } from "react-router-dom"
import Login from "../componennt/Login"
import Signup from "../componennt/Signup"
import AuthRoute from "../componennt/AuthRoute"
import Tracker from "../componennt/Tracker"
import Chat from "../componennt/Chat"

function MainRoute(){
    return (
        <>
        <Routes>
            <Route path="/auth" element={<AuthRoute />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/tracker" element={<Tracker></Tracker>} />
            <Route path="/chat" element={<Chat />} ></Route>
        </Routes>
        </>
    )
}
export default MainRoute