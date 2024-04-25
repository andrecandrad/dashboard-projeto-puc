import Logo from "../assets/img/logo.png";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";



const Header = () => {

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: undefined
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  return (
    <>
      <div>
        <header>
          <nav className="bg-slate-300 lg:px-6 py-0.5">
            <div className="flex flex-wrap justify-between mx-auto items-center max-w-screen-xl">
              <a href="#" className="flex items-center" >
                <img src={Logo} alt="Logo" className="mr-3 h-14" />
              </a>
              <div className="flex flex-row px-6 gap-2">
                <Tippy content="Faça aqui o Upload do PDF">
                  <button className="bg-transparent hover:bg-slate-600 text-slate-700 font-semibold hover:text-white py-2 px-3.5 border-2 border-slate-700 hover:border-transparent rounded-xl">
                    Upload
                  </button>
                </Tippy>
                <form className="mx-auto">
                  <select id="countries" className="bg-transparent border-2 border-slate-700 text-gray-900 rounded-xl focus:border-slate-800 block font-semibold py-2 px-3.5">
                    <option selected>Selecione o condomínio</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
                <Datepicker
                  className="bg-transparent hover:bg-slate-600 text-slate-700 font-semibold"
                  value={value}
                  onChange={handleValueChange}
                  primaryColor={"blue"}
                  placeholder="Selecione o período"
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
