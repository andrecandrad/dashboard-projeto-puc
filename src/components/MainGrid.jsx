import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";

const MainGrid = () => {
  const colors = [];
  const valores = [158661.0, 14064.0, 36837.59];
  const maxValue = Math.max(...valores);

  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-14 bg-slate-200 w-full h-full p-14">
      <div className="rounded-sm shadow-lg col-span-1 row-span-3 p-5">
        <div className="bg-gray-300 py-7 rounded-xl flex flex-col gap-3">
          <div className="flex justify-center items-center gap-5">
            <RiMoneyDollarCircleFill className="text-7xl text-green-600" />
            <h2 className="text-3xl font-semibold">Taxa de condomínio</h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h4 className="text-xl font-semibold">Valor total no período:</h4>
            <h3 className="text-2xl text-green-600 font-bold">R$ 1.697.602,55</h3>
          </div>
        </div>

        {/* novo componente */}
        <div className="flex flex-col text-lg gap-2 mt-7">
          {/* <div className="bg-green-600/60 flex justify-between px-4 py-1 rounded-full min-2 w-11/12">
            <p className="font-semibold">Valor Máximo</p>{" "}
            <p className="text-green-800 font-semibold">{`R$ ${valores[0]}`}</p>
          </div>

          <div className="bg-green-600/20 flex justify-between px-4 py-1 rounded-full min-2 w-6/12">
            <p className="font-semibold">Valor Mínimo</p>{" "}
            <p className="text-green-800 font-semibold">{`R$ ${valores[1]}`}</p>
          </div> */}

          <div className="bg-green-600/40 flex justify-between px-4 py-1 rounded-full min-2 w-8/12">
            <p className="font-semibold">Valor Médio</p>{" "}
            <p className="text-green-800 font-semibold">{`R$ ${valores[2]}`}</p>
          </div>
        </div>
      </div>
      <div className="rounded-sm shadow-lg col-span-1 row-span-3 p-5">
        <div className="bg-gray-300 py-7 rounded-xl flex flex-col gap-3">
          <div className="flex justify-center items-center gap-5">
            <RiMoneyDollarCircleLine className="text-7xl text-red-600" />
            <h2 className="text-3xl font-semibold">Despesas</h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h4 className="text-xl font-semibold">Valor total no período:</h4>
            <h3 className="text-2xl text-red-600 font-bold">R$ 1.828.049,67</h3>
          </div>
        </div>

        {/* novo componente */}
        <div className="flex flex-col text-lg gap-2 mt-7">
          <div className="bg-red-600/60 flex justify-between px-4 py-1 rounded-full min-2 w-11/12">
            <p className="font-semibold">Valor Máximo</p>{" "}
            <p className="text-red-800 font-semibold">{`R$ ${valores[0]}`}</p>
          </div>

          <div className="bg-red-600/20 flex justify-between px-4 py-1 rounded-full min-2 w-6/12">
            <p className="font-semibold">Valor Mínimo</p>{" "}
            <p className="text-red-800 font-semibold">{`R$ ${valores[1]}`}</p>
          </div>

          <div className="bg-red-600/40 flex justify-between px-4 py-1 rounded-full min-2 w-8/12">
            <p className="font-semibold">Valor Médio</p>{" "}
            <p className="text-red-800 font-semibold">{`R$ ${valores[2]}`}</p>
          </div>
        </div>
      </div>
      <div className="rounded-sm shadow-lg col-span-1 row-span-5 p-5">
        <div className="bg-gray-300 py-7 rounded-xl flex flex-col gap-3">
          <div className="flex justify-center items-center gap-5">
            <FaCoins className="text-7xl text-cyan-600" />
            <h2 className="text-3xl font-semibold">Saldo</h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h4 className="text-xl font-semibold">Valor médio no período:</h4>
            <h3 className="text-2xl text-cyan-600 font-bold">R$ 50.302,07</h3>
          </div>
        </div>

        {/* novo componente */}
        <div className="flex flex-col text-lg gap-2 mt-7">
          <div className="bg-cyan-600/60 flex justify-between px-4 py-1 rounded-full min-2 w-11/12">
            <p className="font-semibold">Valor Máximo</p>{" "}
            <p className="text-cyan-800 font-semibold">{`R$ ${valores[0]}`}</p>
          </div>

          <div className="bg-cyan-600/20 flex justify-between px-4 py-1 rounded-full min-2 w-6/12">
            <p className="font-semibold">Valor Mínimo</p>{" "}
            <p className="text-cyan-800 font-semibold">{`R$ ${valores[1]}`}</p>
          </div>
{/* 
          <div className="bg-cyan-600/40 flex justify-between px-4 py-1 rounded-full min-2 w-8/12">
            <p className="font-semibold">Valor Médio</p>{" "}
            <p className="text-cyan-800 font-semibold">{`R$ ${valores[2]}`}</p>
          </div> */}
        </div>
      </div>
      <div className="border-2 border-gray-300 rounded-sm shadow-lg col-span-2 row-span-2">
        a
      </div>
    </div>
  );
};

export default MainGrid;