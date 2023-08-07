"use client";
import Link from "next/link";
import React from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";


const SignupPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  })
  const onSignup = async ()=>{

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-black">
      <h1>Signup</h1>
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
          // className="p-2 text-black border border-gray-300 rounded=lg mb-4 focus:outline-none focus:border-gray-600" 
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
          // className="text-black bg-white border rounded px-4 py-2 focus:outline-none focus:border-gray-600"
          type="password" 
          id="password" 
          value={user.password}
          onChange={(e)=> setUser({...user, password: e.target.value})} 
          placeholder="password" 
      />
      <button 
         onClick={onSignup}
         className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black bg-white" 
         >  Signup here
      </button>
      <Link href={'/login'}
          className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black bg-white" >
          Visit login page
        </Link>
    </div>
  )
}

export default SignupPage