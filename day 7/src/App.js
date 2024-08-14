import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Buy from './Buy';
import Rent from './Rent';
import Swap from './Swap';
import Adminbuy from './Adminbuy';
import Adminrent from './Adminrent';
import Adminswap from './Adminswap';
import Adminlogin from './Adminlogin';
import CartPage from './CartPage';
import GlobalStyle from './GlobalStyle';

import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import RequireAuth from './RequireAuth';
import Adminhome from './Adminhome';
import Payment from './Payment';

function App() {
  return (

    <CartProvider>
      <CssBaseline />
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Protected routes */}
            <Route path="/buy" element={
              <RequireAuth>
                <Buy />
              </RequireAuth>
            } />
            <Route path="/rent" element={
              <RequireAuth>
                <Rent />
              </RequireAuth>
            } />
            <Route path="/swap" element={
              <RequireAuth>
                <Swap />
              </RequireAuth>
            } />


            <Route path="/adminbuy" element={<Adminbuy />} />
            <Route path="/adminrent" element={<Adminrent />} />
            <Route path="/adminswap" element={<Adminswap />} />
            <Route path="/payment" element={<Payment />} />

          </Routes>
        </AuthProvider>
      </Router>
    </CartProvider>

  );
}

export default App;
