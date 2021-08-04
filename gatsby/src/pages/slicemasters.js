import { Link } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const SliceMastersGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const SliceMastersStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    font-size: 4rem;
    text-align: center;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;

const SliceMasters = ({ data: { allSanityPerson }, pageContext }) => {
  const { sliceMasters } = allSanityPerson;
  return (
    <>
      <SEO title={`Slicemasters - Page ${pageContext.current || 1}`} />

      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={allSanityPerson?.totalCount}
        currentPage={pageContext?.current || 1}
        skip={pageContext?.skip}
        base='/slicemasters'
      />
      <SliceMastersGrid>
        {sliceMasters.map(person => (
          <SliceMastersStyles key={person.id}>
            <Link to={`/slicemaster/${person.slug.current}`}>
              <h2>
                <span className='mark'>{person.name}</span>
              </h2>
            </Link>
            <Image fluid={person.image.asset.fluid} />
            <p className='description'>{person.description}</p>
          </SliceMastersStyles>
        ))}
      </SliceMastersGrid>
    </>
  );
};

export default SliceMasters;

export const query = graphql`
  query SliceMasters($skip: Int = 0, $pageSize: Int = 3) {
    allSanityPerson(
      filter: { id: { ne: "-886c3ffb-7060-501a-9e47-3b3a429d2096" } }
      limit: $pageSize
      skip: $skip
    ) {
      totalCount
      sliceMasters: nodes {
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
        name
        id
        description
        slug {
          current
        }
      }
    }
  }
`;
