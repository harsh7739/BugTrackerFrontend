import { useState } from "react"

function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

   async function handleLogin(){
    let obj = {email,password}
          try {
            let res  =await fetch("https://bug-tracker-wasq.onrender.com/api/userRouter/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
               })
          res = res.json()
          alert("Login Successfull")

          } catch (error) {
            console.log(error)
          }
    }
    return (
        <>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" value={"Login"} />
        </form>
        </>
    )
}
export default Login