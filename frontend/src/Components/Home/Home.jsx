import React, { useState } from 'react'
import Card from '../Card/Card'

const Home = () => {
        const [users, setUsers] = useState([{
            firstname: "Gyanvendra",
            lastname: "Singh",
            _id: 1
        }])
  return (
    <div className='m-8'>
      <div className='flex '>
        <div className='font-semibold text-lg'>
            <h3>Your Balance Rs 5000 </h3>
        </div>
      </div>
      <div>
         <h1 className="font-semibold text-lg mt-5">User</h1>
         <input type="text" placeholder='Search User...' className='w-full border mt-3 px-3 py-2 rounded focus:outline-none focus:ring-1 ring-primary-lighter' />
      </div>
      <div>
            {users.map(user => <Card user={user} />)}
      </div>

    </div>
  )
}

export default Home
