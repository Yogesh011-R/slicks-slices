import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

const ItemGrid = ({ items }) => {
  return (
    <ItemsGrid>
      {items.map(item => (
        <ItemStyles key={item._id}>
          <p>
            <span className='mark'>{item.name}</span>
          </p>
          <img
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
            alt={item.name}
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
};

export default ItemGrid;
