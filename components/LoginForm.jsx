"use client";
import {React, useState} from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import Link from 'next/link';

const LoginForm = () => {
  const [error, setError] = useState("");
  return (
    <div className="grid place-items-center h-screen"
    style={{
    background: "linear-gradient(315deg, hsla(66, 76%, 49%, 1) 13%, hsla(32, 100%, 50%, 1) 98%)",}}>
        <div className='flex flex-row items-center justify-center border-6 p-16 pb-8 gap-20 bg-slate-200 border-t-red-400 border-l-red-400 border-r-red-200 border-b-red-300 rounded-2xl shadow-lg'>
        <div className="flex-shrink-0 hidden md:block">
          <img 
            src="planner.jpeg" 
            className="max-w-[200px] object-contain" 
            alt="planner"
          />
        </div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center text-3xl font-bold mb-8'>Member Login</h2>
                <form className='flex flex-col gap-4'>
                    <div className="inputstyle">
                    <AiOutlineMail size={20} className="inline-block mr-2" />
                    <input type='text' className='bg-amber-400' placeholder='Email'></input>
                    </div>
                    <div className="inputstyle">
                    <AiOutlineLock size={20} className="inline-block mr-2" />
                    <input type='password' placeholder='Password'></input>
                    </div>
                    <button className='bg-amber-500 font-medium text-lg pt-2  pb-2 rounded-4xl'>Login</button>
                    {error && (
                    <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                    {error}
                    </div>
                    )}
                    <Link className="text-sm mt-10 text-right" href={'/register'}>
                    Don't have an Account? <span className='underline'>Register</span>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm