import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  border-radius: 5px;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  text-align: center;
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

const Pagination = ({ pageSize, totalCount, currentPage, skip, base }) => {
  const totalPage = Math.ceil(totalCount / pageSize);

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPage;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationStyles>
      <Link
        title='Prev Page'
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}`}
      >
        &#x2190; <span class='word'>prev</span>
      </Link>
      {Array.from({ length: totalPage }).map((_, i) => (
        <Link
          key={i}
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i > 0 ? i + 1 : ''}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        title='Next Page'
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        &#x2192; <span class='word'>next</span>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
