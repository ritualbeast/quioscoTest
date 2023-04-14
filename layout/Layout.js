import Head from "next/head"
import ModalProducto from "@/components/ModalProducto"
import Sidebar from "@/components/Sidebar"
import Modal from "react-modal" 
import Producto from "@/components/Producto"
import useQuiosco from "@/hooks/useQuiosco"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');

export default function Layout({children, pagina}) {
    const {modal} = useQuiosco();
    return (
      
      <>
        <Head>
            <title>Layout</title>
            <meta name="description" content="kiosko" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="md:flex">
            <aside className="md: w-4/12 xl:w-1/4 2xl:w-1/5">
                
            <Sidebar />
            </aside>
            <main className="h-screen overflow-y-scroll md: w-8/12 xl:w-3/4 2xl:w-4/5">
                <div className="bg-gray-100 p-10"> 
                  
                {children}
                </div>
            </main>
        </div>
        {modal && ( <Modal
            isOpen={modal} 
            style={customStyles}
            > 
            <ModalProducto />
            </Modal> )
          }

      </>
    )
    
  }