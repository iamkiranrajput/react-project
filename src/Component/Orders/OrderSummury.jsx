import React from 'react'
import { useNavigate } from 'react-router-dom';
const OrderSummury = () => {
    const navigate = useNavigate();
    // function goToHome() {

    //     navigate('/');
    // }
    return (
        <>
            <div>Order confirmed</div>

            <button type='button' onClick={() => navigate(-1)} className='bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded'> Go back to home</button>
        </>

    )
}

export default OrderSummury