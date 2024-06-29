import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Cart from '../Components/Cart/Cart';
import Navigation from '../Components/Nav/Navigation'
import Footer from '../Components/Footer/Footer';
import Product from '../Components/Product/Product';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import CheckOut from '../Components/CheckOut/CheckOut';
import Order from '../Components/Order/Order';
import OrderDetails from '../Components/Order/OrderDetails';

const CustomerRouter = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default CustomerRouter;
