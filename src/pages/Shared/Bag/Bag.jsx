import React from 'react';
import { useShoppingBag } from '../ShoppingBagContext/ShoppingBagContext';

const Bag = () => {
  const { bagCount, bagItems } = useShoppingBag();
  

  return (
    <div>
      <p>Your Total Products: {bagCount}</p>
      <ul>
        {bagItems.map(item => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bag;
