import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DealCard from '../itemListContainer/index';

function DealsTable() {
  const [deals, setDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${currentPage}&pageSize=3`)
      .then(response => setDeals(response.data))
      .catch(error => console.error(error));
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="cards">
        {deals.map(deal => (
          <DealCard key={deal.dealID} deal={deal} />
        ))}
      </div>
      <button onClick={handleNextPage}>Siguiente página</button>
    </div>
  );
}

export default DealsTable;