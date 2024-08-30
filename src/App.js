import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Component/Home'
import About from './Component/About'
import ContactUs from './Component/ContactUs'
import OrderSummury from './Component/Orders/OrderSummury'
import Error2 from './Component/Error2'
import Products from './Component/Products/Products'
import FeaturedProduct from './Component/Products/FeaturedProduct'
import NewProducts from './Component/Products/NewProducts'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/order-summury' element={<OrderSummury />} />
        <Route path="products" element={<Products />} >
          <Route index element={<FeaturedProduct />} />
          <Route path='featured' element={<FeaturedProduct />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='*' element={<Error2 />} />
      </Routes>

    </>
  )
}

export default App