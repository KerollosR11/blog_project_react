import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({id, image, username, desc, title, handleDelete, editPost}) {
  return (
    // <div className='w-full'>

            <div className='w-5/6 h-80 bg-slate-200 shadow-xl mt-5 mb-5 flex '>
                
                <div className='w-3/6'>
                    <img src={image} className='h-full'></img>
                </div>
                <div className='w-3/6 flex flex-col justify-between p-5'>
                    <div className='font-bold'>
                        {username}
                    </div>
                    <div>
                        <div className='font-bold text-lg'>
                            {title}
                        </div>
                        <div>
                            {desc}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={`/editpost/${id}`} className='w-1/6 h-12'><button onClick={editPost} className='btn btn-success  text-white'>Edit</button></Link>
                        <button onClick={handleDelete} className='btn btn-error w-1/6 h-12 text-white ml-5'>Delete</button>
                    </div>
                </div>

            </div>
    // </div>
    
        
  )
}
