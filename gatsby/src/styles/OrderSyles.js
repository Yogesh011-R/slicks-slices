import styled from 'styled-components';

export const OrderFormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    align-content: start;
    gap: 1rem;
    &.order,
    &.menu {
      grid-column: span 1;
    }
  }
  .mapleSyrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;
