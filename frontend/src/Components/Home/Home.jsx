import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'

const Home = () => {
        const [users, setUsers] = useState([])
        const [balance, setBalance] = useState("")
        const [filter, setFilter] = useState("")
        
       useEffect(() => {
         return async () => {
          // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzA1NWM4ZGE3NzViYjg5NjZmYjQ0NDIiLCJpYXQiOjE3Mjg0MDQ2MjF9.3V2y7dstUpyRzR4W5buJuxTa034mu_y-bpLmOHGyzIM"
      await fetch("http://localhost:3000/api/v1/user/balance",{
                 method:"GET",
                 headers: {
                     "content-type":"application/json",
                     "Authorization": 'Bearer ' + localStorage.getItem("token")
                 }})
                 .then(async (res)=>{
                     const json = await res.json()
                     console.log(json);
                     setBalance(json.balance.$numberDecimal)
                 })  
      }
         }, [])
       
      
   useEffect(() => {
     return  () => {
      // await fetch("http://localhost:3000/api/v1/user/search?filter=",{
      //   method:"GET",
      //   headers: {
      //       "content-type":"application/json",
      //      //  "Authorization": 'Bearer ' + token
      //   }})
      //   .then(async (res)=>{
      //       const json = await res.json()
      //       console.log(json);
      //       setUsers(json.user)
      //   })
       axios.get("http://localhost:3000/api/v1/user/search?filter="+filter,
        {
          headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
          }}
        )
      .then(response=>{
            setUsers(response.data.user)
      })
     }
   }, [filter])
     
  


  return (
    <div className='m-8'>
      <div className='flex '>
        <div className='font-semibold text-lg'>
            <h3>Your Balance Rs {balance} </h3>
        </div>
      </div>
      <div>
         <h1 className="font-semibold text-lg mt-5">User</h1>
         <input type="text" placeholder='Search User...' onChange={(e)=>setFilter(e.target.value)} className='w-full border mt-3 px-3 py-2 rounded focus:outline-none focus:ring-1 ring-primary-lighter' />
      </div>
      <div>
            {users.map(user => <Card user={user} />)}
      </div>

    </div>
  )
}

export default Home
