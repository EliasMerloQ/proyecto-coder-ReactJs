import React from 'react';
import ItemListJ from '../itemListJ/itemListJ'


const ItemListContainer = (filteredItems) => {
  return (
    <div className="backgroundLanding">
      <ItemListJ items={filteredItems} />
    </div>
  );
};

export default ItemListContainer;