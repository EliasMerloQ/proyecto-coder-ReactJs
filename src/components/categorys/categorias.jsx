  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import DealCard from '../cardItem/cardItem';
  import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
  import { Container, Row, Button, Col, Stack } from 
  'react-bootstrap';
  import { useParams, useLocation } from 'react-router-dom';

  function Categorias() {
    const [deals, setDeals] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const params = useParams()

    useEffect(() => {
      axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${currentPage}&pageSize=8&storeID=${params.categoryId}`)
        .then(response => setDeals(response.data))
        .catch(error => console.error(error));
    }, [currentPage]);


    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
    };
    const handleAfterPage = () => {
      if(currentPage > 0){
        setCurrentPage(currentPage - 1);
      }
    }

    return (
      <div>
        <Container>
          <Row className='pt-4 boxItems'>
            {deals.map(deal => (
                <Col className='d-flex justify-content-center colItemList'>
                  <DealCard key={deal.dealID} deal={deal}/>
                </Col>
              ))}
          </Row>
          <Stack direction="horizontal" gap={2} className='d-flex justify-content-center mt-4'>
            <Button onClick={handleAfterPage}><BsFillCaretLeftFill/></Button>
            <Button onClick={handleNextPage}> <BsFillCaretRightFill/></Button>
          </Stack>
        </Container>
      </div>
    );
  }

  export default Categorias;