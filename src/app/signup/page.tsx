"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


const SignupPage = () => {
  const router= useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDissbled, setButtonDisabled] = useState(false)
  const [loading, setLoding] = useState(false)

  const onSignup = async ()=>{
      try {
        setLoding(true);
        
        const response = await axios.post('api/users/signup', user);
        // console.log("signup success", response.data);
        router.push("/login")
      } catch (error:any) {
        console.log("Signup failed", error.message);
        toast.error(error.message)
      }finally{
        setLoding(false);
      }
  }
  useEffect(()=>{
    if(user.email.length >0 && user.password.length >0 && user.username.length >0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-black">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input 
          // className="p-2 text-black border border-gray-300 rounded=lg mb-4 focus:outline-none focus:border-gray-600" 
          className="text-black bg-white border rounded-lg px-4 py-2 focus:outline-none focus:border-gray-600"
          type="text" 
          id="username" 
          value={user.username}
          onChange={(e)=> setUser({...user, username: e.target.value})} 
          placeholder="username" 
      />
      <label htmlFor="email">email</label>
      <input 
          className="text-black bg-white border rounded-lg px-4 py-2 focus:outline-none focus:border-gray-600"
          type="email" 
          id="email" 
          value={user.email}
          onChange={(e)=> setUser({...user, email: e.target.value})} 
          placeholder="email" 
      />
      <label htmlFor="password">password</label>
      <input 
          className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black bg-white" 
          type="password" 
          id="password" 
          value={user.password}
          onChange={(e)=> setUser({...user, password: e.target.value})} 
          placeholder="password" 
      />
      <button 
         onClick={onSignup}
         className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black bg-white" 
         >  {buttonDissbled ? "No signup": " Signup"}
      </button>
      <Link href="/login"
          className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black bg-white" >
          Visit login page
      </Link>
    </div>
  )
}

export default SignupPage