import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
const ModalProducto = () => {
    const {producto} = useQuiosco();
    console.log(producto);
  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <h1 className="text-3xl font-light">Agrega cantidades y observaciones</h1>
            <div className="md:w-2/3">
                <Image width={400} height={500} src={`/assets/img/${producto.imagen}.jpg`}  
                alt={`imagen producto ${producto.nombre}`}
                />

            </div>
                    </div>
      
    </div>
  )
}

export default ModalProducto
