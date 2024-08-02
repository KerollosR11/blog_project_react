import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../icons/Logo'
import AuthDetails from './AuthDetails'
import { auth } from '../firebase'

export default function Navbar({authUser, handleSignOut, firstName, lastName, loginFullName}) {
  const [userFirstName, setUserFirstName] = useState(firstName)
    const [userLastName, setUserLastName] = useState(lastName)
  return (
    // <div>Navbar</div>
    <div className="navbar bg-slate-300 px-5">
        <div className="flex-1">
          <Logo/>
        </div>
        <div className="flex-none flex">
          {
            authUser? 
                <div className='flex'>
                    <div className='mr-3 flex justify-center items-center capitalize font-bold font-oleo text-2xl'>{loginFullName? loginFullName: userFirstName + " "+ userLastName}  </div>
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
    </div>
  )
}
