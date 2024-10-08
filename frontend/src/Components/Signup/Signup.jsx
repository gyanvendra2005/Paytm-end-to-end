import React from 'react'

const Signup = () => {
  return (
    <div className='mt-20 ml-20 items-center'>
        <div>
            <h1 className=''>Sign Up</h1>
            <p>Enter your information to create an account</p>
        </div>
        <div>
            <h3>First Name</h3>
            <input type="text" placeholder='first name' />
            <h3>Last Name</h3>
            <input type="text" placeholder='last' />
            <h3>Email</h3>
            <input type="email" placeholder='email' />
            <h3>Password</h3>
            <input type="text" placeholder='password' />
        </div>
      
    </div>
  )
}

export default Signup
