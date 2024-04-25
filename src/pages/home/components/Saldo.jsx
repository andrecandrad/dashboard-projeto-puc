import BottomRightChartRows from "./charts/ChartRowsRight";
import RightChartBars from "./charts/ChartBarsRight";
import PropTypes from "prop-types";
import { FaCoins } from "react-icons/fa";


const Saldo = (props) => {
  return (
    <>
      <div className="rounded-sm col-span-1 row-span-5">
        <div className="p-3">
          <div className="bg-gray-200 py-4 rounded-xl flex flex-col gap-3">
            <div className="flex justify-center items-center gap-5">
              <FaCoins className="text-7xl text-cyan-600" />
              <h2 className="text-3xl font-semibold">Saldo</h2>
            </div>
            <div className="flex justify-center items-center gap-5">
              <h4 className="text-xl font-semibold">Valor médio no período:</h4>
              <h3 className="text-2xl text-cyan-600 font-bold">R$ 50.302,07</h3>
            </div>
          </div>
          <div className="flex flex-col text-lg gap-2 mt-7">
            <div className="bg-cyan-600/60 flex justify-between px-4 py-1 rounded-full min-2 w-11/12">
              <p className="font-semibold">Valor Máximo</p>{" "}
              <p className="text-cyan-800 font-semibold">{`R$ ${props.valores[0].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
            </div>

            <div className="bg-cyan-600/20 flex justify-between px-4 py-1 rounded-full min-2 w-6/12">
              <p className="font-semibold">Valor Mínimo</p>{" "}
              <p className="text-cyan-800 font-semibold">{`R$ ${props.valores[1].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
            </div>
          </div>
          <RightChartBars />
          <div className="rounded-sm col-span-2 row-span-2 pt-10">
            <BottomRightChartRows />
          </div>
        </div>
      </div>
    </>
  );
};


Saldo.propTypes = {
  valores: PropTypes.array.isRequired,
};

export default Saldo;
