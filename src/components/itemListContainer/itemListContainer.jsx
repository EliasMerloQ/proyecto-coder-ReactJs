import React from 'react';
import ItemList from '../itemList/itemList'


const ItemListContainer = (filteredItems) => {
  return (
    <div className="backgroundLanding">
      <ItemList items={filteredItems} />
    </div>
  );
};

export default ItemListContainer;