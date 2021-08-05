import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../../components/PizzaList';
import SEO from '../../components/SEO';
import ToppingsFilter from '../../components/ToppingsFilter';

const Toppings = ({
  data: {
    allSanityPizza: { pizzas },
  },
  pageContext,
}) => {
  return (
    <>
      <SEO title={`Pizzas with ${pageContext.name}`} />
      <ToppingsFilter All />
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default Toppings;

export const query = graphql`
  query Toppings($name: String!) {
    allSanityPizza(
      filter: { toppings: { elemMatch: { name: { eq: $name } } } }
    ) {
      pizzas: nodes {
        id
        name
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
