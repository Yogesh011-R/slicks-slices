import { Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    text-decoration: none;
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    background: var(--grey);
    align-items: center;
    border-radius: 2px;
    &[aria-current='page'] {
      background: var(--yellow);
    }
    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;

const query = graphql`
  {
    allSanityPizza {
      pizzas: nodes {
        toppings {
          name
          id
        }
      }
    }
  }
`;

const ToppingsFilter = ({ All }) => {
  const {
    allSanityPizza: { pizzas },
  } = useStaticQuery(query);

  const countPizzasInToppings = pizzas => {
    const counts = pizzas
      .map(pizza => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {
        // check existing topping
        const existing = acc[topping.name];
        if (existing) {
          existing.count += 1;
        } else {
          acc[topping.name] = {
            id: topping.id,
            name: topping.name,
            count: 1,
          };
        } // else  create new
        return acc;
      }, {});

    const sortedToppings = Object.values(counts).sort(
      (a, b) => b.count - a.count
    );
    return sortedToppings;
  };

  const toppingsWithCount = countPizzasInToppings(pizzas);

  return (
    <ToppingsStyles>
      <Link to='/pizzas'>
        <span className='name'>All</span>{' '}
        <span className='count'>{pizzas.length}</span>
      </Link>
      {toppingsWithCount.map(topping => (
        <Link
          key={topping.id}
          to={`/topping/${slugify(topping.name, {
            lower: true,
          })}`}
        >
          <span className='name'>{topping.name}</span>
          <span className='count'>{topping.count}</span>
        </Link>
      ))}{' '}
    </ToppingsStyles>
  );
};

export default ToppingsFilter;
