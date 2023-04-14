import Image from 'next/image'
import { formatearDinero } from '@/helpers';
import useQuiosco from '@/hooks/useQuiosco';

const Producto = ({producto}) => {
  const {handleSetProductos, handleChangeModal} = useQuiosco();
    const {nombre, imagen, precio} = producto;
  return (
    <div className="border p-3">
        <Image width={400} height={500} src={`/assets/img/${imagen}.jpg`} 
        alt={`Imagen platillo ${nombre}`}
         />  
         <div className="p-5 mt-4 text-center"> 
            <p className="text-lg font-bold">{nombre}</p>
            <p className="text-amber-500 text-lg font-bold">{formatearDinero(precio)}</p>
            <button 
            onClick={() => 
            {
              handleSetProductos(producto);
              handleChangeModal();

            }
            }

            type="button" className="bg-amber-500 hover:bg-amber-600 w-full mt-5 p-2 text-white uppercase font-bold">Agregar al pedido</button>
            
            </div>
      
    </div>
  )
}

export default Producto
