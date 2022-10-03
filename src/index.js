import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import {
  cartReducer,
  productReducer,
  orderReducer,
  userReducer,
} from './reducers/index';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import Login from './components/Login';
import Register from './components/Register';
import PaymentPage from './pages/PaymentPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/myorders" element={<OrdersPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailsPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
