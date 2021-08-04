import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
import usePizza from '../utils/usePizza';
import Img from 'gatsby-image';
import { OrderFormStyles } from '../styles/OrderSyles';
import { MenuItemStyles } from '../styles/MenuItemStyles';
import PizzaOrder from '../components/PizzaOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

const OrderPage = ({
  data: {
    allSanityPizza: { pizzas },
  },
}) => {
  const { values, updateValues } = useForm({
    name: '',
    email: '',
    mapleSyrup: '',
  });

  const {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    handleOrder,
  } = usePizza({
    pizzas,
    values,
  });

  if (message) return <p>{message}</p>;

  return (
    <>
      <SEO title='Order Pizza' />
      <OrderFormStyles onSubmit={handleOrder}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={values.name}
            onChange={updateValues}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={values.email}
            onChange={updateValues}
          />
          <input
            type='mapleSyrup'
            id='mapleSyrup'
            name='mapleSyrup'
            className='mapleSyrup'
            value={values.mapleSyrup}
            onChange={updateValues}
          />
        </fieldset>
        <fieldset className='menu' disabled={loading}>
          <legend>Menu</legend>
          {pizzas.map(pizza => {
            return (
              <MenuItemStyles key={pizza.id}>
                <Img
                  width={50}
                  height={50}
                  fluid={pizza.image.asset.fluid}
                  alt={pizza.name}
                />
                <div>
                  <h2>{pizza.name}</h2>
                </div>
                <div>
                  {['S', 'M', 'L'].map((size, i) => (
                    <button
                      key={i}
                      type='button'
                      onClick={() => addToOrder({ id: pizza.id, size })}
                    >
                      {size}{' '}
                      {formatMoney(calculatePizzaPrice(pizza.price, size))}
                    </button>
                  ))}
                </div>
              </MenuItemStyles>
            );
          })}
        </fieldset>
        <fieldset className='order' disabled={loading}>
          <legend>Order</legend>
          <PizzaOrder
            order={order}
            removeFromOrder={removeFromOrder}
            pizzas={pizzas}
          />
        </fieldset>

        <fieldset disabled={loading}>
          <h3>
            Your Total is {formatMoney(calculateOrderTotal(order, pizzas))}
          </h3>
          {error && <p>Error: {error}</p>}
          <button type='submit' disabled={loading}>
            {loading ? 'Placing Order....' : '  Order Ahead'}
          </button>
        </fieldset>
      </OrderFormStyles>
    </>
  );
};

export default OrderPage;

export const query = graphql`
  query {
    allSanityPizza {
      pizzas: nodes {
        id
        name
        slug {
          current
        }
        price
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
