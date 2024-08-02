import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

export default function AuthDetails({authUser, handleSignOut, firstName, lastName, loginFullName}) {

    const [userFirstName, setUserFirstName] = useState(firstName)
    const [userLastName, setUserLastName] = useState(lastName)

    
    
  return (
    <>
        <div>{
            authUser? 
                <div className='flex'>
                    <div className='mr-3 flex justify-center items-center capitalize'>{loginFullName? loginFullName: userFirstName + " "+ userLastName}  </div>
                    <Link to={'/'}>
                        <button onClick={handleSignOut} className='btn btn-info'>Sign Out</button>
                    </Link>
                </div>
                : 
                <Link to={'/login'}>
                    <button className='btn btn-info'>Login</button>
                </Link>
            }
        </div>
    </>
    

  )
}
