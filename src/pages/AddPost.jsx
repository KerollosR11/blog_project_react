import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {object, string} from 'yup'
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




export default function AddPost({
        posts,
        handleChange,
        
        errors,
        addPostForm,
        handleSubmit,
        schema,

    }) {
    

  return (
    <>
        {
            console.log(posts)
        }
        <Navbar/>
        <div className='bg-slate-800 h-screen flex flex-col justify-center items-center'>
        
        <div className='w-3/12 h-4/6 bg-white mt-4 p-5 flex justify-center border-0 rounded-md'>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-evenly items-center h-full w-full'>
                    <div className='mb-2 w-full '>
                        <label className='capitalize font-bold text-lg ml-1'>image url</label>
                        <input className='input border-1 border-blue-200 w-full mt-1'
                            type='text' 
                            placeholder='Add Image Url'
                            id='image'
                            name='image'
                           onChange={handleChange}
                        >
                        </input>

                        {errors.image && 
                            <span className='ml-2 text-red-600 font-bold text-xs'>
                                {errors.image}
                            </span>
                        }

                    </div>
                    <div className='mb-2 w-full'>
                        <label className='capitalize font-bold text-lg ml-1'>title</label>
                        <input className='input border-1 border-blue-200 w-full mt-1' 
                                type='text' 
                                placeholder='Add Post Title'
                                id='title'
                                name='title'
                                onChange={handleChange}
                        >
                        </input>
                        {errors.title && 
                            <span className='ml-2 text-red-600 font-bold text-xs'>
                                {errors.title}
                            </span>
                        }
                    </div>
                    <div className='mb-2 w-full'>
                        <label className='capitalize font-bold text-lg ml-1'>description</label>
                        <input className='input border-1 border-blue-200 w-full mt-1' 
                                type='text' 
                                placeholder='Add Description'
                                id='description'
                                name='description'
                                onChange={handleChange}
                        >
                        </input>
                        {errors.description && 
                            <span className='ml-2 text-red-600 font-bold text-xs'>
                                {errors.description}
                            </span>
                        }
                    </div>
                    
                    <div className='w-full flex justify-end'>
                        <button className='btn   text-white text-sm uppercase tracking-wider
                                            bg-slate-800'>
                            post
                        </button>
                    </div>
                </div>
            </form>
            
        </div>

    </div>
    </>
  )
}
