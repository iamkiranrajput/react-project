import React from 'react'
import Navbar from './Navbar'
import { replace, useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate();
    const placeOrder = () => {
        navigate('order-summury');
    }

    return (

        <>
            <Navbar />
            <div>Home</div>

            <button type='button' onClick={placeOrder} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Place Order</button>
        </>
    )
}

export default Home