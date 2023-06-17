import React,{useState, useEffect} from 'react';
import Categorias from '../categorys/categorias';
import { useLocation } from 'react-router-dom';


const CategoryContainer = () => {

  const locacion = useLocation()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((previousKey) => previousKey + 1)
  }, [locacion])
  return (
    <div className="backgroundLanding">
      <Categorias key={key}/>
    </div>
  );
};

export default CategoryContainer;