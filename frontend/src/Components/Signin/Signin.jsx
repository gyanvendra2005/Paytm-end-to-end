import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Signin = () => {     
        
        const [password, setPassword] = useState("");
        const [username, setEmail] = useState("");
   
        const add = async() =>{
           // await fetch("http://localhost:3000/api/v1/user/signin",{
           //         method:"POST",
           //         body: JSON.stringify({
           //             firstname,
           //             lastname,
           //             username,
           //             password
           //         }),
           //         headers: {
           //             "content-type":"application/json"
           //         }})
           //         .then(async (res)=>{
           //             const json = await res.json()
           //             console.log(json);
                       
           //             alert("User LoggedIn") 
           //         })
           const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
               username,
               password
       })
         alert("logged in")
         console.log(response.data);
         
       }
   



    return <div className='bg-slate-300 h-screen flex justify-center '>
      <div className='flex flex-col justify-center'>
          <div className='rounded-lg bg-white w-80 text-center shadow-lg shadow-gray-600 '>
              <h1 className='font-bold text-4xl pt-6'>Sign In</h1>
              <p className='text-slate-500 text-md pt-1 px-4 pb-4'>Enter your credentials to access</p>
              <h3 className='text-sm font-medium text-left py-2 px-3'>Email</h3>
              <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' className='w-5/6 px-2 py-1 border rounded border-slate-200' />
              <h3 className='text-sm font-medium text-left py-2 px-3'>Password</h3>
              <input type="text" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} className='w-5/6 px-2 py-1 border rounded border-slate-200' />
              <button  type="button" onClick={add} className=" w-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2">Sign In</button>
  
             </div>
          </div>
      </div>
  
}

export default Signin
