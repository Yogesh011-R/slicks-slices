import React from 'react';
import { MenuItemStyles } from '../styles/MenuItemStyles';
import Img from 'gatsby-image';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
const PizzaOrder = ({ order, pizzas, removeFromOrder }) => {
  return (
    <>
      {order.map((singleOrder, i) => {
        const pizza = pizzas.find(pizza => pizza.id === singleOrder.id);
        return (
          <MenuItemStyles key={`${singleOrder.id}-{i}`}>
            <Img fluid={pizza?.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
              <button
                className='remove'
                type='button'
                title={`Remove ${singleOrder.size} 
              ${pizza.name}`}
                onClick={() => removeFromOrder(i)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
};

export default PizzaOrder;
