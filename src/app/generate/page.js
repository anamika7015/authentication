import React from 'react'

const Generate = () => {
  return (
    <div className='bg-green-200 min-h-screen grid grid-cols-2'>
     <div className=' col1 flex justify-center items-center gap-2 flex-col'>
     <h1 className='font-bold text-4xl '>Create your Bittree</h1>
     <div className='flex flex-col gap-5 border-black my-8'>
      <h2 className=' font-semibold text-2xl'> Step1 : claim your Handle</h2>
      <div className='mx-4'>
     <input type='text' placeholder='choose a handle' className='bg-white px-2 py-2 rounded-3xl border-2 mx-2' />
     <h2 className=' font-semibold text-2xl'> Step2 : Add your links</h2>
      <input type='text' placeholder='Enter your link' className='bg-white px-2 py-2 rounded-3xl border-2 gap-3 mx-2 my-2' /> 
      
      <input type='text' placeholder='Enter  link' className='bg-white px-2 py-2 border-2 rounded-3xl mx-2 my-2'/>
     
      <button className='bg-slate-900 mx-2 my-2 p-2 rounded-4xl text-2xl  text-white'> Add link</button>
      </div>
       <div className='mx-4 flex flex-col'>
      <h2 className=' font-semibold text-2xl'> Step3 : Add a picture and finalize </h2>
      <input type='text' placeholder='Enter  link to your picture' className='bg-white px-2 py-2 border-2 rounded-3xl mx-2 my-2'/>
      <button className='bg-slate-900 mx-2 py-2 p-1 w-fit my-5 rounded-4xl text-2xl  text-white'> create your Bitlink</button>
      </div>
     </div>
     </div>
     <div className=' col2  bg-green-200'>
     <img src='login1.jpeg' alt='generate your links' className='h-[900] w-[900] object-contain' />
     </div>
    </div>
  )
}

export default Generate
