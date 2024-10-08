import React from 'react'

const Headers = () => {
  return (
    <header>
        <div className='flex shadow h-14 justify-between'>
            <div className='m-3 font-bold'>
                <h1>PayTM App</h1>
            </div>
            <div className='flex '>
                <div className='flex flex-col justify-center h-full mr-4 font-medium'>
                    <h1>Hello</h1>
                </div>
                <div className='bg-slate-200 flex justify-center mt-1 mr-2 rounded-full h-12 w-12'>
                   <div className='flex flex-col justify-center h-full text-xl'>
                     <p className='font-semibold text-green-400'>U</p>
                   </div>
                </div>
            </div>
            
            
        </div>
    </header>
  
  )
}

export default Headers
