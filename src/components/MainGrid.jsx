import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdAttachMoney, MdOutlineMoneyOff } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import RightChartBars from "./Charts/ChartBarsRight";
import LeftChartBars from "./Charts/ChartBarsLeft";
import CenterChartPie from "./Charts/ChartPie";
import BottomChartRows from "./Charts/ChartRows";
import TopicMainBox from "./TopicMainBox";
import ValuesComparison from "./ValuesComparison";

const MainGrid = () => {
  const valores = [158661.0, 14064.0, 36837.59];

  const topicsInfo = {
    taxaCondominio: {
      title: "Taxa de condomínio",
      valueDescription: "Valor total no período",
      value: "1.697.602,55",
      icon: <MdAttachMoney />,
      color: "green",
      values: [
        {
          id: "maxValue",
          value: null,
        },
        {
          id: "avgValue",
          value: 36837.59,
        },
        {
          id: "minValue",
          value: null,
        },
      ],
    },
    despesas: {
      title: "Despesas",
      valueDescription: "Valor total no período",
      value: "1.828.049,67",
      icon: <MdOutlineMoneyOff />,
      color: "red",
      values: [
        {
          id: "maxValue",
          value: 158661,
        },
        {
          id: "avgValue",
          value: 36837.59,
        },
        {
          id: "minValue",
          value: 14064,
        },
      ],
    },
    saldo: {
      title: "Saldo",
      valueDescription: "Valor médio no período",
      value: "50.302,07",
      icon: <MdAttachMoney />,
      color: "cyan",
      values: [
        {
          id: "maxValue",
          value: 158661,
        },
        {
          id: "avgValue",
          value: null,
        },
        {
          id: "minValue",
          value: 14064,
        },
      ],
    },
  };

  const { taxaCondominio, despesas, saldo } = topicsInfo;

  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-2 bg-slate-100 p-7">
      <div className="rounded-sm col-span-1 row-span-3">
        <div className="p-3">
          <TopicMainBox
            title={taxaCondominio.title}
            valueDescription={taxaCondominio.valueDescription}
            value={taxaCondominio.value}
            icon={taxaCondominio.icon}
            color={taxaCondominio.color}
          />

          <ValuesComparison
            values={taxaCondominio.values}
            color={taxaCondominio.color}
          />

          <LeftChartBars />
        </div>
      </div>

      <div className="rounded-sm  col-span-1 row-span-3">
        <div className="p-3">
          <TopicMainBox
            title={despesas.title}
            valueDescription={despesas.valueDescription}
            value={despesas.value}
            icon={despesas.icon}
            color={despesas.color}
          />
          <ValuesComparison values={despesas.values} color={despesas.color} />
        </div>

        <CenterChartPie />
      </div>

      <div className="rounded-sm col-span-1 row-span-5">
        <div className="p-3">
          <TopicMainBox
            title={saldo.title}
            valueDescription={saldo.valueDescription}
            value={saldo.value}
            icon={saldo.icon}
            color={saldo.color}
          />

          <ValuesComparison values={saldo.values} color={saldo.color} />
          <RightChartBars />
        </div>
      </div>

      <div className="rounded-sm col-span-2 row-span-2 pt-8">
        <BottomChartRows />
      </div>
    </div>
  );
};

export default MainGrid;
