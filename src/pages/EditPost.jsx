import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {object, string} from 'yup'
import { v4 as uuid } from 'uuid';
import axios from 'axios';


// const schema = object({
//     image: string().required(),
//     title: string().required(),
//     description: string().required(),

// })


export default function EditPost({
    key,
    posts,
    handleEditImage,
    handleEditTitle,
    handleEditDescription,
    editHandleSubmit,
    errors,
    schema,
    navigate,
    editPostForm
}) {
    
    // const [editPostForm, setEditPostForm]= useState({image:"", title: "", description:""});
    // const [errors, setErrors] = useState({image:null, title: null, description:null})
    
    // const handleEditImage = (e)=>{
    //     setEditPostForm ({...editPostForm, image : e.target.value});
    // }
    // const handleEditTitle = (e)=>{
    //     setEditPostForm ({...editPostForm, title : e.target.value});
    // }
    // const handleEditDescription = (e)=>{
    //     setEditPostForm ({...editPostForm, description : e.target.value});
    // }
    
    // console.log(editPostForm);


    // const editHandleSubmit = (e)=>{
    //     e.preventDefault();
    //     // console.log(addPostForm);
        

    //     setErrors((prevErr)=>({image:null, title: null, desc:null}));
        
    //     try {
    //         const x = schema.validateSync(editPostForm, {abortEarly:false})
            
    //     } catch (error) {
    //         error.inner.forEach(
    //             (err)=>{
    //                 setErrors( (prevErr)=>({
    //                     ...prevErr, [err.path]: err.message
    //                 }))
    //             }
    //         )
    //     }

    // }

   

  return (
    <>
        <Navbar/>
        <div className='bg-slate-800 h-screen flex flex-col justify-center items-center'>
        
        <div className='w-3/12 h-4/6 bg-white mt-4 p-5 flex justify-center border-0 rounded-md'>

            <form onSubmit={editHandleSubmit}>
                <div className='flex flex-col justify-evenly items-center h-full w-full'>
                    <div className='mb-2 w-full '>
                        <label className='capitalize font-bold text-lg ml-1'>image url</label>
                        <input className='input border-1 border-blue-200 w-full mt-1'
                            type='text' 
                            placeholder='Add Image Url'
                            id='image'
                            name='image'
                            value={editPostForm.image}
                           onChange={handleEditImage}
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
                                value={editPostForm.title}
                                onChange={handleEditTitle}
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
                                value={editPostForm.description}
                                onChange={handleEditDescription}
                        >
                        </input>
                        {errors.description && 
                            <span className='ml-2 text-red-600 font-bold text-xs'>
                                {errors.description}
                            </span>
                        }
                    </div>
                    
                    <div className='w-full flex justify-end'>
                        <button className='btn  w-2/6 text-white text-sm uppercase tracking-wider
                                            bg-slate-800'>
                            save
                        </button>
                    </div>
                </div>
            </form>
            
        </div>

    </div>
    </>
  )
}
