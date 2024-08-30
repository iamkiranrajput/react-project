import React from 'react'
import Navbar from '../Navbar'
import { Link, Outlet } from 'react-router-dom';
const Products = () => {
    return (
        <div>
            <Navbar />
            <div>
                <input type="text" placeholder='search products' className=' m-5 p-2 w-1/3 border-2 border-blue-600' />
            </div>
            <nav className='flex bg-slate-500 gap-2 p-4 '>
                <Link to="featured" className='hover:text-red-300'>Featured</Link>
                <Link to="new" className='hover:text-red-300'>New</Link>

            </nav>

            <div className='m-5 font-bold'>
                <Outlet />
            </div>
        </div>
    )
}

export default Products