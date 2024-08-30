import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    return (
        <>
            <nav className='bg-blue-300 p-2 flex flex-wrap justify-center items-center gap-3 font-semibold text-blue-950' >
                <NavLink to="/" className='hover:text-red-500' style={navLinkStyles}>Home</NavLink>
                <NavLink to="/about" style={navLinkStyles} className='hover:text-red-500' >About</NavLink>
                <NavLink to="/contact" className='hover:text-red-500' style={navLinkStyles}>Contact</NavLink>
                <NavLink to="/products" className='hover:text-red-500' style={navLinkStyles}>Products</NavLink>

            </nav>
        </>
    )
}

export default Navbar