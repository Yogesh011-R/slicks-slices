import { useContext, useState } from 'react';
import OrderContext from '../components/orderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
import calculateOrderTotal from './calculateOrderTotal';
import formatMoney from './formatMoney';
import React from 'react';

export default function usePizza({ pizzas, values }) {
  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useContext(OrderContext);
  console.log('🚀 ~ file: usePizza.js ~ line 10 ~ usePizza ~ order', order);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function addToOrder(orderPizza) {
    setOrder([...order, orderPizza]);
  }

  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }

  const handleOrder = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const body = {
      order: attachNamesAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
      mapleSyrup: values.mapleSyrup,
    };

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text);
    } else {
      setLoading(false);
      setMessage('Successful! Come on down for your pizza');
    }
  };

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    handleOrder,
  };
}
