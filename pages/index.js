


import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Layout from '@/layout/Layout'
import Sidebar from '@/components/Sidebar'
import useQuiosco from '@/hooks/useQuiosco'
import Producto from '@/components/Producto'

export default function Home() {
  const { categoriaActual } = useQuiosco();
  
  return (
    <Layout pagina={`Menu${categoriaActual?.nombre}`}>
      <h1 className='text-3xl text-center font-light p-3'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl text-center font-light p-3'>Elige y personaliza</p> 
      <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map(producto => (  
          <Producto key={producto.id} producto={producto} />
        ))}

        </div> 
      
    </Layout>
  );
}
