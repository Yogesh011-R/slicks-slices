import React from 'react';
import Img from 'gatsby-image';
import SEO from '../../components/SEO';
import { graphql } from 'gatsby';
const SliceMaster = ({ data: { sliceMaster } }) => {
  return (
    <>
      <SEO title={sliceMaster.name} image={SliceMaster.image?.src} />
      <div className='center'>
        <Img fluid={sliceMaster.image.asset.fluid} />
        <h2>
          <span className='mark'>{sliceMaster.name}</span>
          <p>{sliceMaster.description}</p>
        </h2>
      </div>
    </>
  );
};

export default SliceMaster;

export const query = graphql`
  query Single($slug__current: String) {
    sliceMaster: sanityPerson(slug: { current: { eq: $slug__current } }) {
      name
      description
      id
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
