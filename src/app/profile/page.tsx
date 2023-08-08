'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState('')
  const logout = async() =>{
    try {
      await axios.get('/api/users/logout')
      toast.success("Logout successful")
      router.push('/login')

    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  const getUserDetails = async() =>{
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setData(res.data.data._id)
  }

  return (

    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
        <h1>Profile</h1>
        <hr />
        <h1>Profile page</h1>
        <h2 className='p-1 rounded bg-green-500 '>{data ? <Link href={`/profile/${data}`}>{data}</Link>: "Nothing"}</h2>
        <hr />
        <button
          onClick={logout} 
          className='bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded'> Logout</button>

        <button
          onClick={getUserDetails} 
          className='bg-green-800 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded'> Get User details</button>
    </div>
  )
}

export default ProfilePage