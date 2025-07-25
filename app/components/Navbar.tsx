import React from 'react'
import { Link } from 'react-router'
import { usePuterStore } from '~/lib/puter';

const Navbar = () => {
  const { auth } = usePuterStore();


  return (
    <nav className='navbar'>
        <Link to='/'>
          <p className="text-2xl font-bold text-gradient">FitFinder</p>
        </Link>
        <Link to="/upload" className='primary-button w-fit'>
        Upload Resume
        
        </Link>
        {auth.isAuthenticated &&
          <Link to="/auth" className='text-2xl font-bold text-gradient'>
            Log out
          </Link>
        }
    </nav>
  )
}

export default Navbar