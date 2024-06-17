import Logo from "../assets/img/logo.png";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
export default function Header(props){

  return (
   <>
     <div>
       <header>
         <nav className="bg-slate-300 lg:px-6 py-0.5">
           <div className="flex flex-wrap justify-between mx-auto items-center max-w-screen-xl">
             <a href="#" className="flex items-center">
               <img src={Logo} alt="Logo" className="mr-3 h-14" />
             </a>
             <div className="flex flex-row gap-2">
               <Tippy content="Carregue os dados do condomínio desejado">
                 <button
                  className="bg-transparent hover:bg-slate-600 text-slate-700 font-semibold hover:text-white py-2 px-3.5 border-2 border-slate-700 hover:border-transparent rounded-xl"
                  onClick={() => props.setShowModal(true)}
                 >
                  Importar dados 
                 </button>
               </Tippy>
             </div>
           </div>
         </nav>
       </header>
     </div>
   </>
  );
};