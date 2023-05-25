import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import css from '../pages/shopPage.module.css';

import burger from 'images/burger.jpg';
import Cheeseburger from 'images/Cheeseburger.jpg';
import crispyChicken from 'images/crispyChicken.jpg';
import fish from 'images/fish.jpg';
import Fries from 'images/Fries.jpg';
import Muffin from 'images/Muffin.jpg';
import CinnamonRoll from 'images/CinnamonRoll.jpg';
import Cappuccino from 'images/Cappuccino.jpg';
import Americano from 'images/Americano.jpg';
import Juice from 'images/Juice.jpg';

const Shops = ({ addToCart }) => {
  const shops = [
    { id: 1, name: 'MC Donny' },
    { id: 2, name: 'CMF' },
    { id: 3, name: 'Dr Jack' },
    { id: 4, name: 'Bistro' },
    { id: 5, name: 'Burger House' },
    { id: 6, name: 'Sandwich World' },
    { id: 7, name: 'Coffee & bread' },
  ];

  const [selectedShopId, setSelectedShopId] = useState(null);

  const toggle = value => {
    if (selectedShopId === value) {
      setSelectedShopId(null);
    } else {
      setSelectedShopId(value);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.shopBlock}>
        <ul className={css.shopList}>
          {shops.map(shop => (
            <li key={shop.id}>
              <button
                onClick={() => toggle(shop.id)}
                className={
                  selectedShopId === shop.id ? css.shopBtnActive : css.shopBtn
                }
                disabled={selectedShopId && selectedShopId !== shop.id}
              >
                {shop.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedShopId && <Shop shopId={selectedShopId} addToCart={addToCart} />}
    </div>
  );
};

export const Shop = ({ addToCart }) => {
  const products = [
    { id: nanoid(), name: 'Big Burger', price: 20, image: burger },
    { id: nanoid(), name: 'Cheeseburger', price: 12, image: Cheeseburger },
    { id: nanoid(), name: 'Crispy Chicken', price: 15, image: crispyChicken },
    { id: nanoid(), name: 'Fish Filet Patty', price: 15, image: fish },
    { id: nanoid(), name: 'Fries', price: 10, image: Fries },
    { id: nanoid(), name: 'Blueberry Muffin', price: 8, image: Muffin },
    { id: nanoid(), name: 'Cinnamon Roll', price: 8, image: CinnamonRoll },
    { id: nanoid(), name: 'Cappuccino', price: 10, image: Cappuccino },
    { id: nanoid(), name: 'Americano', price: 8, image: Americano },
    { id: nanoid(), name: 'Juice', price: 5, image: Juice },
  ];

  const handleAddToCart = product => {
    const cartItem = {
      id: nanoid(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div className={css.productContainer}>
      <ul className={css.productList}>
        {products.map(product => (
          <li key={product.id} className={css.product}>
            <img
              className={css.productImage}
              src={product.image}
              alt={product.name}
            />
            <p className={css.productName}>
              {product.name} - ${product.price}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className={css.productBtn}
            >
              add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shops;
