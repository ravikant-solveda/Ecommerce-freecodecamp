
"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { kMaxLength } from "buffer";

const LoginPage = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false)

  const onLogin = async ()=>{
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log("login success", response.data);
      toast.success("Login success");
      router.push('/profile')

    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true);
    }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black ">
      <h1 className="text-white">{loading ? "Processing" : "Login"}</h1>
      <hr />
      <label htmlFor="email" className="text-white">Email</label>
      <input 
          // className="p-2  border border-gray-300 rounded=lg mb-4 focus:outline-none focus:border-gray-600" 
          className=" bg-white border rounded-lg px-4 py-2 focus:outline-none focus:border-gray-600"
          type="email" 
          id="email" 
          value={user.email}
          onChange={(e)=> setUser({...user, email: e.target.value})} 
          placeholder="email" 
      />
      <label htmlFor="password" className="text-white">password</label>
      <input 
          className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  bg-white" 
          // className=" bg-white border rounded px-4 py-2 focus:outline-none focus:border-gray-600"
          type="password" 
          id="password" 
          value={user.password}
          onChange={(e)=> setUser({...user, password: e.target.value})} 
          placeholder="password" 
      />
      <button 
         onClick={onLogin}
         className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  bg-white" 
         >  Signup here
      </button>
      <Link 
        href={'/signup'}
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  bg-white" 
      >
          Visit signup page
      </Link>
    </div>
  )
}

export default LoginPage
