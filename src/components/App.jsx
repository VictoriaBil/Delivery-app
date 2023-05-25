import { useState, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './Routes/Private';
import { RestrictedRoute } from './Routes/Restricted';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Shops = lazy(() => import('../pages/shopPage'));
const Cart = lazy(() => import('../pages/cartPage'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления товара в корзину
  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };

  // Функция для удаления товара из корзины
  const removeFromCart = item => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/shops" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/shops" component={<Login />} />
          }
        />
        <Route
          path="/shops"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={
                <Shops
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />
          }
        />

        <Route path="*" element="Page not found" />
      </Route>
    </Routes>
  );
}
