import React, { useState } from 'react'
import Logo from '../../icons/Logo'
import { Link, useNavigate } from 'react-router-dom'
import {object, string} from 'yup'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios'


export default function SignUp( {signUpErrors, signUpHandleChange, signUpHandleSubmit, signUpForm}) {
    const navigate = useNavigate();
  return (
    <div className='bg-red-500 h-screen flex justify-center items-center'>
        

        <div className='w-4/12 h-5/6 bg-white mt-4 p-7 flex flex-col justify-around border-0 rounded-md shadow-2xl'>
            <p className='text-black text-xl  tracking-wider font-oleo text-center'>Get started with your account</p>
            <form onSubmit={signUpHandleSubmit}>
                <div className='flex flex-col justify-center items-center mb-2'>
                    <div className='flex mb-2'>
                        <div className='w-3/6  mr-1'>
                            <input className='input  border-1 mr-1 border-blue-200 w-full '
                                    type='text'
                                    placeholder='First Name'
                                    onChange={signUpHandleChange}
                                    name='firstName'
                                    >
                            </input>
                            {signUpErrors.firstName && 
                                <span className='ml-2 text-red-600 font-bold text-xs'>
                                    {signUpErrors.firstName}
                                </span>
                            }
                        </div>

                        <div className='w-3/6 '>
                            <input className='input  border-1  border-blue-200 w-full '
                                    type='text' 
                                    placeholder='Last Name'
                                    onChange={signUpHandleChange} 
                                    name='lastName'
                                    >
                            </input>
                            {signUpErrors.lastName && 
                                <span className='ml-2 text-red-600 font-bold text-xs'>
                                    {signUpErrors.lastName}
                                </span>
                            }
                        </div>
                    </div>
                    <select className="select select-bordered w-full mb-2"
                            onChange={signUpHandleChange}
                            name='gender'>
                        
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <div className='w-full mb-2'>
                        <input className='input  border-1 border-blue-200 w-full'
                                type='text'
                                placeholder='Email'
                                onChange={signUpHandleChange}
                                name='email'
                                >
                        </input>
                        {signUpErrors.email && 
                            <span className='ml-2 text-red-600 font-bold text-xs'>
                                {signUpErrors.email}
                            </span>
                        }

                    </div>

                    <div className='w-full mb-2'>
                        <input className='input border-1 border-blue-200 w-full'
                                type='password' 
                                placeholder='password' 
                                onChange={signUpHandleChange}
                                name='password'
                        >
                        </input>
                        {signUpErrors.password && 
                            <span className='ml-2 text-red-600 font-bold text-xs'>
                                {signUpErrors.password}
                            </span>
                        }

                    </div>
                    <button className='btn  w-full text-white text-lg
                                        bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] 
                                        shadow-lg 
                                        border-0'
                            type='submit'
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='flex justify-center items-center'>
                <p className='mr-1'>alread have an account?</p>
                <Link to={'/login'} className='text-blue-600 cursor-pointer hover:text-blue-900'> Login </Link>
            </div>
        </div>
    </div>
  )
}
