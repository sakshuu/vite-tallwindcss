import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import { pic, star, } from '../assets/img'

const Home = () => {
  return <>
    <div className="min-h-screen bg-gray-100">
<Navigationbar/>
      {/* Hero Section */}
     
      <div className=" flex justify-between items-center">
        {/* Left Side Content */}
        <div className=' ml-40 '>
          {/* <h1 className="text-4xl font-bold text-gray-800">Get The Best Digital Experience</h1> */}
          <p className="mt-4 text-4xl font-bold text-black">Hello, My <span className='text-yellow-400'>name's</span> </p>
          <p className="text-4xl font-bold text-black"> <span className='text-blue-400'>John</span>  Smith</p>
          <p className="mt-2 text-black text-4xl font-bold">I'm a Full Stack </p>
          <p className="mt-2 text-green-600 text-4xl font-bold">Graphics <span className='text-red-400'>Designer...</span></p>
          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">CONTACT ME</button>
          &nbsp; &nbsp;   <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">CONTACT ME</button>
        </div>

        {/* Right Side Content */}
        <div className='bg-blue-700' style={{height:"520px"}}>

        {/* </div> */}
        <div className=" flex justify-center  ">
<div className='bg-slate-50 shadow-lg relative rounded-full flex h-96  w-96 right-56 top-28'>
  <img src={star} className='absolute right-10 top-14 w-10' alt="" />
          <img src={pic} alt="Design"  className="absolute bottom-5 rounded-full m-auto
 shadow-sm w-96 text-center " />
 </div>
        </div>
        </div>
      </div>
  
   <Projects/>
   <Services/>
    </div>
  </>
}

export default Home