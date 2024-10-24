import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image1 from './image/photo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen w-full bg-slate-800 bg-cover px-20 py-2 relative">
      <nav className="flex items-center">
         <p className="text-white p-5 text-2xl">Ahammod</p>

        <ul className="flex-1 text-center hover:text-red-500">

          <li className=" list-none inline-block px-5 "><a href="#" className="no-underline text-white px-2  hover:text-red-500 duration-500">Home</a></li>

          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-white px-2 hover:text-red-500 duration-500">Product</a></li>

          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-white px-2 hover:text-red-500 duration-500">Pricing</a></li>

          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-white  hover:text-red-500 duration-500">Contact</a></li>
        </ul>

        <li className=" list-none inline-block px-10"><a href="#" className="no-underline text-white  hover:text-red-500 duration-500">Login</a></li>

        <button className="bg-blue-500 px-5 w-19 h-10  text-white  m-3 rounded-3xl hover:bg-red-400 duration-500">JOIN US<span className="inline-block">&#8594;</span></button>
      </nav>

        <div className='flex justify-between '>
        <div>
       <div className="mt-20 "> 
        <h6 className="text-blue-600 mb-5">online traning</h6>
        <h1 className="text-6xl text-white mb-5">Best learning <br></br>Opportunities</h1>
         <p className="text-white mb-5">we know how large objects will act.<br></br> but things on a small scale </p>

          <div className="mt-5">
          <button  className="bg-blue-500 px-5 w-19 h-10  text-white font-bold m-3 rounded-xl hover:bg-transparent hover:border-blue-500 hover:text-white duration-500 hover:border duration-500">JOIN US</button>
          <button  className="px-5  w-19 h-10  text-blue-500 border border-blue-400 hover:bg-white duration-500">learn More</button>
          </div>
      </div>
       </div>

       <div>
       <img src={image1} alt="logo" className="" />
       </div>
        </div>
       

    </div>


    </>
  )
}

export default App
