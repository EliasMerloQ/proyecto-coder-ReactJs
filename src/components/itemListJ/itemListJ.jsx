import React, { useState, useEffect } from 'react';
import CardList from '../cardList/cardList';
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { Container, Row, Button, Col, Stack } from 'react-bootstrap';
import getGames from '../../utils/firebase';


function ItemListJ() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const simulateLoading = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    simulateLoading();

    getGames().then((game) => {
      setData(game)
  }); // Asignar los datos del archivo JSON al estado `data`
  }, []);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / dataPerPage) - 1){
      setCurrentPage(currentPage + 1);
    }
  };
  const handleAfterPage = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 1);
    }
  }

  const dataPerPage = 6;
  const startIndex = currentPage * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div>
      {isLoading ? (
        <Container>
          <Row className='pt-4 boxItems'>
            <div>Cargando...</div>
          </Row>
          <Stack direction="horizontal" gap={2} className='d-flex justify-content-center mt-4'>
            <Button onClick={handleAfterPage}><BsFillCaretLeftFill/></Button>
            <Button onClick={handleNextPage}> <BsFillCaretRightFill/></Button>
          </Stack>
        </Container>
      ) : (
        <Container>
          <Row className='pt-4 boxItems'>
            {currentPageData.map(game => (
                <Col className='d-flex justify-content-center colItemList'>
                  <CardList key={game} game={game} />
                </Col>
              ))}
          </Row>
          <Stack direction="horizontal" gap={2} className='d-flex justify-content-center mt-4'>
            <Button onClick={handleAfterPage} disabled={currentPage === 0}><BsFillCaretLeftFill/></Button>
            <Button onClick={handleNextPage} disabled={currentPage >= Math.ceil(data.length / dataPerPage) - 1}> <BsFillCaretRightFill/></Button>
          </Stack>
        </Container>
      )}
    </div>
  );
}

export default ItemListJ;
