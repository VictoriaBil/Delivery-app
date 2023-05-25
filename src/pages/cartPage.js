import React, { useState } from 'react';
import css from '../pages/cartPage.module.css';
import ContactForm from '../components/ContactForm/ContactForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleRemoveFromCart = item => {
    removeFromCart(item);
  };

  const handleQuantityChange = (itemId, event) => {
    const newQuantities = { ...quantities, [itemId]: event.target.value };
    setQuantities(newQuantities);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 1),
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Please add items to cart');
    } else toast.success('Order is processed!');
    clearCart();
  };

  return (
    <div>
      <ToastContainer />
      <div className={css.cartContainer}>
        <ContactForm />
        {cartItems.length === 0 ? (
          <p className={css.emptyCartMessage}>Cart is empty</p>
        ) : (
          <div className={css.cartBlock}>
            <ul className={css.cartList}>
              {cartItems.map(item => (
                <li key={item.id} className={css.cart}>
                  <img
                    className={css.cartImage}
                    src={item.image}
                    alt={item.name}
                  />
                  <p className={css.productName}>
                    {item.name} - ${item.price}
                  </p>
                  <input
                    type="number"
                    value={quantities[item.id] || 1}
                    min="1"
                    onChange={e => handleQuantityChange(item.id, e)}
                    className={css.quantityInput}
                  />
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className={css.cartBtn}
                  >
                    Remove item
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={css.totalBlock}>
        <p className={css.totalPrice}>Total price: ${totalPrice}</p>
        <button onClick={handleCheckout} className={css.submitBtn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Cart;
