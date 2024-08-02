import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { Link } from 'react-router-dom';
import AllPosts from '../components/AllPosts';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'



export default function Home({
    posts, 
    handleDelete, 
    handleEdit ,  
    firstName, 
    lastName, 
    handleSignOut, 
    authUser, 
    loginFullName,
    loginEmail
}) {

    
      



   
    function test(){
        console.log("clickeddd");
        console.log(loginEmail);
        
    }


// if(authUser){
//     if(loginEmail == authUser.email){
//         return(
//             <>
//                 <Navbar></Navbar>
//                 <div>
//                 <div className=' flex flex-col justify-center items-center mx-auto'>
                
//                 {posts.map((post) => (
                    
//                     <div key={post.id} className='w-5/6 h-80 bg-slate-200 shadow-xl mt-5 mb-5 flex '>

//                     <div className='w-3/6'>
//                         <img src={post.image} className='h-full'></img>
//                     </div>
//                     <div className='w-3/6 flex flex-col justify-between p-5'>
//                         <div className='capitalize'>
//                             {/* {post.username} */}
//                             {!post.username ? firstName + " " + lastName : post.username}
//                         </div>
//                         <div>
//                             <div className='font-bold text-lg'>
//                                 {post.title}
//                             </div>
//                             <div>
//                                 {post.desc}
//                             </div>
//                         </div>
//                         <div className='flex justify-end'>
//                             <button onClick={()=>handleEdit(post.id)} className='w-1/6 h-12 btn btn-success  text-white'>Edit</button>
//                             <button onClick={()=>handleDelete(post.id)} className='btn btn-error w-1/6 h-12 text-white ml-5'>Delete</button>
//                         </div>
//                     </div>

//                     </div>

//                 ))}
            
//             </div>
//                 </div>
//             <Link to={'/addpost'}>
//                 <button className='w-14 h-14
//                             bg-slate-600
//                             flex justify-center items-center
//                             border-0 rounded-2xl 
//                             text-white text-3xl pb-1
//                             fixed bottom-0 right-0 mr-5 mb-5 cursor-pointer' onClick={test}>
//                     +
//                 </button>
//             </Link>
//             </>
//         )
//     }else{
//         return (
//             <>
//             <Navbar></Navbar>
//             <div>
//             <div className=' flex flex-col justify-center items-center mx-auto'>
                
//                 {posts.map((post) => (
                    
//                     <div key={post.id} className='w-5/6 h-80 bg-slate-200 shadow-xl mt-5 mb-5 flex '>

//                     <div className='w-3/6'>
//                         <img src={post.image} className='h-full'></img>
//                     </div>
//                     <div className='w-3/6 flex flex-col justify-between p-5'>
//                         <div className='capitalize'>
//                             {/* {post.username} */}
//                             {!post.username ? firstName + " " + lastName : post.username}
//                         </div>
//                         <div>
//                             <div className='font-bold text-lg'>
//                                 {post.title}
//                             </div>
//                             <div>
//                                 {post.desc}
//                             </div>
//                         </div>
//                         <div className='flex justify-end'>
//                             {/* <button onClick={()=>handleEdit(post.id)} className='w-1/6 h-12 btn btn-success  text-white'>Edit</button>
//                             <button onClick={()=>handleDelete(post.id)} className='btn btn-error w-1/6 h-12 text-white ml-5'>Delete</button> */}
//                         </div>
//                     </div>

//                     </div>

//                 ))}
            
//             </div>
//             </div>
//             <Link to={'/addpost'}>
//                 <button className='w-14 h-14
//                             bg-slate-600
//                             flex justify-center items-center
//                             border-0 rounded-2xl 
//                             text-white text-3xl pb-1
//                             fixed bottom-0 right-0 mr-5 mb-5 cursor-pointer' onClick={test}>
//                     +
//                 </button>
//             </Link>
//             </>
    
//         )
//     }
// }
// else{
//     return(
//         <>
//             <div className=' flex flex-col justify-center items-center mx-auto'>
                
//                 {posts.map((post) => (
                    
//                     <div key={post.id} className='w-5/6 h-80 bg-slate-200 shadow-xl mt-5 mb-5 flex '>

//                     <div className='w-3/6'>
//                         <img src={post.image} className='h-full'></img>
//                     </div>
//                     <div className='w-3/6 flex flex-col justify-between p-5'>
//                         <div className='capitalize'>
//                             {post.username}
//                         </div>
//                         <div>
//                             <div className='font-bold text-lg'>
//                                 {post.title}
//                             </div>
//                             <div>
//                                 {post.desc}
//                             </div>
//                         </div>
//                         <div className='flex justify-end'>
//                             {/* <button onClick={()=>handleEdit(post.id)} className='w-1/6 h-12 btn btn-success  text-white'>Edit</button>
//                             <button onClick={()=>handleDelete(post.id)} className='btn btn-error w-1/6 h-12 text-white ml-5'>Delete</button>*/}
//                         </div> 
//                     </div>

//                     </div>

//                 ))}
            
//             </div>
//         </>
//     )
// }


  return (
    
    <>
        <Navbar  
            authUser={authUser}
            handleSignOut={handleSignOut}
            firstName={firstName}
            lastName={lastName}
            loginFullName={loginFullName}
        >

        </Navbar>
        <div>{authUser?

            

            <>
            <div className=' flex flex-col justify-center items-center mx-auto'>
                
                {posts.map((post) => (
                    
                    <div key={post.id} className='w-5/6 h-80 bg-slate-200 shadow-xl mt-5 mb-5 flex '>

                    <div className='w-3/6'>
                        <img src={post.image} className='h-full'></img>
                    </div>
                    <div className='w-3/6 flex flex-col justify-between p-5'>
                        <div className='capitalize font-bold font-oleo text-xl'>
                            {/* {post.username} */}
                            {!post.username ? firstName + " " + lastName : post.username}
                        </div>
                        <div>
                            <div className='font-bold text-lg'>
                                {post.title}
                            </div>
                            <div>
                                {post.desc}
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={()=>handleEdit(post.id)} className='w-1/6 h-12 btn btn-success  text-white'>Edit</button>
                            <button onClick={()=>handleDelete(post.id)} className='btn btn-error w-1/6 h-12 text-white ml-5'>Delete</button>
                        </div>
                    </div>

                    </div>

                ))}
            
            </div>

            <Link to={'/addpost'}>
                <button className='w-14 h-14
                            bg-slate-600
                            flex justify-center items-center
                            border-0 rounded-2xl 
                            text-white text-3xl pb-1
                            fixed bottom-0 right-0 mr-5 mb-5 cursor-pointer' onClick={test}>
                    +
                </button>
            </Link>
            </>
            :
            <>
            <div className=' flex flex-col justify-center items-center mx-auto'>
                
                {posts.map((post) => (
                    
                    <div key={post.id} className='w-5/6 h-80 bg-slate-200 shadow-xl mt-5 mb-5 flex '>

                    <div className='w-3/6'>
                        <img src={post.image} className='h-full'></img>
                    </div>
                    <div className='w-3/6 flex flex-col justify-between p-5'>
                        <div className='capitalize font-bold font-oleo text-xl'>
                            {post.username}
                        </div>
                        <div>
                            <div className='font-bold text-lg'>
                                {post.title}
                            </div>
                            <div>
                                {post.desc}
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            {/* <button onClick={()=>handleEdit(post.id)} className='w-1/6 h-12 btn btn-success  text-white'>Edit</button>
                            <button onClick={()=>handleDelete(post.id)} className='btn btn-error w-1/6 h-12 text-white ml-5'>Delete</button>*/}
                        </div> 
                    </div>

                    </div>

                ))}
            
            </div>
            </>
        }
        </div>
    </>
  )
}
