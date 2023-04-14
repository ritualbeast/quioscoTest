import { useState, useEffect, createContext } from "react";   
import axios from "axios";
const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]); 
  const [categoriaActual, setCategoriaActual] = useState({}); 
  const [productos, setProductos] = useState({});
  const [modal , setModal] = useState(false);


  const obtenerCategoria = async () => {
     const respuesta = await axios('/api/categorias')

    setCategorias(respuesta.data);
  };
  useEffect(() => {
    obtenerCategoria();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleClick = id => { 
    const categoria = categorias.filter(cat => cat.id === id);
    setCategoriaActual(categoria[0]);
    
  };
  const handleSetProductos = producto => {
    setProductos(producto);
  };
  const handleChangeModal = () => {
    setModal(!modal);
  };

  return (
    <QuioscoContext.Provider value={{ 
      categorias,
      categoriaActual,
      handleClick,
      productos,
      handleSetProductos,
      modal,
      handleChangeModal

      
     }}>
      {children}
    </QuioscoContext.Provider>
  );
}
export {QuioscoProvider };
export default QuioscoContext;