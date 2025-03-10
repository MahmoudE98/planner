"use client";
import {React, useState} from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { MdPerson } from 'react-icons/md';
import Link from 'next/link';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !password || !email){
        setError("All fields are necessary.");
        return;
    }else if(name && password && email){
        setError("");
    }
  }
  return (
    <div className="grid place-items-center h-screen items-center justify-center"
    style={{
    background: "linear-gradient(315deg, hsla(66, 76%, 49%, 1) 13%, hsla(32, 100%, 50%, 1) 98%)",}}>
        <div className='flex items-center justify-center border-6 p-16 pb-12 gap-20 bg-slate-200 border-t-red-400 border-l-red-400 border-r-red-200 border-b-red-300 rounded-2xl'>
            <div className="flex-shrink-0 hidden md:block">
                <img 
                    src="planner.jpeg" 
                    className="w-[250px] object-contain" 
                    alt="planner"
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center text-3xl font-bold mb-8'>Create Account</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                    <div className="inputstyle">
                    <MdPerson size={20} className="inline-block mr-2" />
                    <input 
                    onChange={(e) => setName(e.target.value)} 
                    type='text' 
                    placeholder='Name'></input>
                    </div>

                    <div className="inputstyle">
                    <AiOutlineMail size={20} className="inline-block mr-2" />
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    type='text' 
                    placeholder='Email'></input>
                    </div>

                    <div className="inputstyle">
                    <AiOutlineLock size={20} className="inline-block mr-2" />
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    placeholder='Password'></input>
                    </div>

                    <button className='bg-amber-500 hover:bg-amber-500/80 font-medium text-lg pt-2 mt-2 pb-2 rounded-4xl cursor-pointer'>Register</button>
                    {error && (
                    <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                    {error}
                    </div>
                    )}
                    <Link className="text-sm text-right mt-10" href={'/'}>
                    Already have an Account? <span className='underline hover:text-gray-800'>Login</span>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register


