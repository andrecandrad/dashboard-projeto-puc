import { RiMoneyDollarCircleFill } from "react-icons/ri";
import PropTypes from "prop-types";
import CenterChartPie from "./charts/ChartPie";

const Despesas = (props) => {
  return (
    <div className="rounded-sm  col-span-1 row-span-3">
      <div className="p-3">
        <div className="bg-gray-200 py-4 rounded-xl flex flex-col gap-3">
          <div className="flex justify-center items-center gap-5">
            <RiMoneyDollarCircleFill className="text-7xl text-red-600" />
            <h2 className="text-3xl font-semibold">Despesas</h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h4 className="text-xl font-semibold">Valor total no período:</h4>
            <h3 className="text-2xl text-red-600 font-bold">R$ 1.828.049,67</h3>
          </div>
        </div>
        <div className="flex flex-col text-lg gap-2 mt-7">
          <div className="bg-red-600/60 flex justify-between px-4 py-1 rounded-full min-2 w-11/12">
            <p className="font-semibold">Valor Máximo</p>{" "}
            <p className="text-red-800 font-semibold">{`R$ ${props.valores[0].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
          </div>
          <div className="bg-red-600/40 flex justify-between px-4 py-1 rounded-full min-2 w-8/12">
            <p className="font-semibold">Valor Médio</p>{" "}
            <p className="text-red-800 font-semibold">{`R$ ${props.valores[2].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
          </div>
          <div className="bg-red-600/20 flex justify-between px-4 py-1 rounded-full min-2 w-6/12">
            <p className="font-semibold">Valor Mínimo</p>{" "}
            <p className="text-red-800 font-semibold">{`R$ ${props.valores[1].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</p>
          </div>
        </div>
      </div>
      <CenterChartPie />
    </div>
  );
};

Despesas.propTypes = {
  valores: PropTypes.array.isRequired,
};

export default Despesas;
