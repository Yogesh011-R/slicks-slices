import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../../components/SEO';
const PizzaGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

const SinglePizza = ({ data: { pizza } }) => {
  return (
    <>
      <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
      <PizzaGrid>
        <Image fluid={pizza.image.asset.fluid} />
        <div>
          <h2 className='mark'>{pizza.name}</h2>
          <h3 style={{ margin: '2rem 0 -1rem 0' }}>Toppings</h3>
          <ul>
            {pizza.toppings.map(topping => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
        </div>
      </PizzaGrid>
    </>
  );
};

export default SinglePizza;

export const query = graphql`
  query SinglePizza($slug__current: String) {
    pizza: sanityPizza(slug: { current: { eq: $slug__current } }) {
      name
      toppings {
        id
        name
        vegetarian
      }
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
