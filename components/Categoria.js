import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
const Categoria = ({categoria}) => {
  const {nombre, icono, id} = categoria;
  const {categoriaActual, handleClick} = useQuiosco();
  
  return (
    <div className={`${categoriaActual?.id === id ? "bg-amber-400": "w-full"}flex items-center gap-3 border p-5 hover:bg-amber-400`}>
     
      <Image width={70} height={70} 
      src={`/assets/img/icono_${icono}.svg`} 
      alt={nombre} 
      /> 
      <button 
      onClick={
        () => handleClick(id)
      }
      type="button"
      className=" w-full p-2 font-bold uppercase">    
      {nombre}
      </button>
      

      
    </div>
  )
}

export default Categoria
