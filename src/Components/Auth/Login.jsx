import React, { useState } from 'react'


const Login = ({handleLogin}) => {

   //this submitHandler process is called 2 way binding

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

   const submitHandler =(e)=>{
       e.preventDefault()
       handleLogin(email,password)
       setEmail("")
       setPassword("")
   }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col item-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 mt-3 text-xl placeholder:text-gray-400' type="password" placeholder='enter password' />
                <button className='text-white outline-none  border-none bg-emerald-600 rounded-full py-3 px-5 mt-5 text-xl placeholder:text-white'>Log in</button>

                <span className='text-sm mt-4'>email: admin@me.com or e1@e.com,
                pass: 123
                </span>
                
            </form>
        </div>
    </div>
  )
}

export default Login
