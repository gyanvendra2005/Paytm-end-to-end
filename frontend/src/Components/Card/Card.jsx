import React, { useState } from 'react'

function Card({user}){
  return <div className="flex justify-between">
  <div className="flex">
      <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
              {user.firstname[0]}
          </div>
      </div>
      <div className="flex flex-col justify-center h-ful">
          <div>
              {user.firstname} {user.lastname}
          </div>
      </div>
  </div>

  <div className="flex flex-col justify-center h-ful">
  <button  type="button" className=" w-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2">Send Money</button>
  </div>
</div>
  
}

export default Card
