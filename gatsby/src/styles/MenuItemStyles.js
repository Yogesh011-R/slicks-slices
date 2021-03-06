import styled from 'styled-components';

export const MenuItemStyles = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-items: center;
  align-content: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 1.5rem;
  }

  button + button {
    margin-left: 1rem;
  }
  @media (max-width: 500px) {
    button + button:last-child {
      margin: 0.8rem 0 0 0;
    }
  }
  @media (max-width: 400px) {
    button + button {
      margin: 0.8rem 1rem 0 0;
    }
  }

  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    top: 0;
    right: 0;
    box-shadow: none;
    position: absolute;
    line-height: 1rem;
  }
`;
