import { useState } from "react"

function Signup(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [avatar,setAvatar] = useState("")
    const [name,setName] = useState("")

   async function handleSubmit(){
    let obj = {email,password,name,avatar}
          try {
            let res  =await fetch("https://bug-tracker-wasq.onrender.com/api/userRouter/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
               })
          res = res.json()
          alert("Registration Successful")
          
          } catch (error) {
            console.log(error)
          }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Avatar" value={avatar} onChange={(e)=>setAvatar(e.target.value)} />
            <input type="submit" value={"Submit"} />
        </form>
        </>
    )
}
export default Signup