import React, { createContext, useState } from 'react'
import Logo from '../../icons/Logo'
import { Link, useNavigate } from 'react-router-dom'




export default function Login(
    {
        loginErrors,
        loginHandleChange,
        loginHandleSubmit,
        loginForm
    }
) {
    const navigate = useNavigate();
    
    
  return (
    <div className='bg-red-500 h-screen flex flex-col justify-center items-center'>
        
        <div className='w-4/12 h-96 bg-white mt-4 p-7 flex flex-col justify-evenly border-0 rounded-md'>
            <p className='text-black text-xl  tracking-wider font-oleo text-center'>Login to continue</p>

            <form onSubmit={loginHandleSubmit}>
                <div className='flex flex-col justify-center items-center mb-2'>
                    <div className='mb-2 w-full'>
                        <input className='input border-1 border-blue-200 w-full'
                            type='text' 
                            placeholder='Email'
                            id='email'
                            name='email'
                            onChange={loginHandleChange}
                        >
                        </input>


                    </div>
                    <div className='mb-2 w-full'>
                        <input className='input border-1 border-blue-200 w-full' 
                                type='password' 
                                placeholder='password'
                                id='password'
                                name='password'
                                onChange={loginHandleChange}
                        >
                        </input>
 
                    </div>
                    {loginErrors && 
                            <span className='mt-3 mb-3 uppercase text-red-600 font-bold text-lg font-oleo'>
                                {loginErrors}
                            </span>
                        }
                    <button className='btn  w-full text-white text-lg
                                        bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
                        login
                    </button>
                </div>
            </form>
            <div className='flex justify-center items-center'>
                <p className='mr-1'>Don't have an account?</p>
                <Link to={'/signup'} className='text-blue-600 cursor-pointer hover:text-blue-900'> Sign up </Link>
            </div>
        </div>

    </div>
  )
}

