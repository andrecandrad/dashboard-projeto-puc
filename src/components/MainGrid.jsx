import { MdAttachMoney, MdOutlineMoneyOff } from "react-icons/md";
import RightChartBars from "../charts/ChartBarsRight";
import RightChartRows from "../charts/ChartRowsRight";
import LeftChartBars from "../charts/ChartBarsLeft";
import BottomChartRows from "../charts/ChartRows";
import CenterChartPie from "../charts/ChartPie";
import TopicMainBox from "./TopicMainBox";
import ValuesComparison from "./ValuesComparison";
import PostCondominiosPeriodo from "../Requests/PostCondominiosPeriodo.jsx";
import PropTypes from "prop-types";

export default function MainGrid({ chartData }) {
  const valoresTotais = chartData.totais || {};
  const months = Object.keys(valoresTotais).sort();

  let totalReceitas = 0;
  let totalDespesas = 0;

  months.forEach((m) => {
    totalReceitas += valoresTotais[m].total_receitas;
    totalDespesas -= valoresTotais[m].total_despesas;
  });

  const getValuesForComparison = (comparisonType) => {
    if (
      comparisonType !== "total_receitas" &&
      comparisonType !== "total_despesas"
    ) {
      return [];
    }

    let maxValue;
    let minValue;
    let avgValue;

    months.forEach((m) => {
      const comparisonValue = valoresTotais[m][comparisonType];

      if (!maxValue) {
        maxValue = comparisonValue;
      } else {
        maxValue = comparisonValue > maxValue ? comparisonValue : maxValue;
      }

      if (!minValue) {
        minValue = comparisonValue;
      } else {
        minValue = comparisonValue < minValue ? comparisonValue : minValue;
      }
    });

    avgValue =
      comparisonType === "total_receitas"
        ? totalReceitas / months.length
        : totalDespesas / months.length;

    return [
      {
        id: "maxValue",
        value: formatMonetaryValues(maxValue),
      },
      {
        id: "avgValue",
        value: formatMonetaryValues(avgValue),
      },
      {
        id: "minValue",
        value: formatMonetaryValues(minValue),
      },
    ];
  };

  const getValuesForSaldo = () => {
    const saldos = chartData.saldos || {};
    let maxSaldo;
    let minSaldo;
    let saldoTotal = 0;

    months.forEach((m) => {
      const monthSaldo = saldos[m];

      if (!maxSaldo) {
        maxSaldo = monthSaldo;
      } else {
        maxSaldo = monthSaldo > maxSaldo ? monthSaldo : maxSaldo;
      }

      if (!minSaldo) {
        minSaldo = monthSaldo;
      } else {
        minSaldo = monthSaldo < minSaldo ? monthSaldo : minSaldo;
      }

      saldoTotal += monthSaldo;
    });

    return [
      {
        id: "maxValue",
        value: formatMonetaryValues(maxSaldo),
      },
      {
        id: "avgValue",
        value: formatMonetaryValues(saldoTotal / months.length),
      },
      {
        id: "minValue",
        value: formatMonetaryValues(minSaldo),
      },
    ];
  };

  const topicsInfo = {
    taxaCondominio: {
      title: "Taxa de condomínio",
      valueDescription: "Valor total no período",
      value: "1.697.602,55",
      icon: <MdAttachMoney />,
      color: "green",
      values: getValuesForComparison("total_receitas"),
    },
    despesas: {
      title: "Despesas",
      valueDescription: "Valor total no período",
      value: "1.828.049,67",
      icon: <MdOutlineMoneyOff />,
      color: "red",
      values: getValuesForComparison("total_despesas"),
    },
    saldo: {
      title: "Saldo",
      valueDescription: "Valor médio no período",
      value: "50.302,07",
      icon: <MdAttachMoney />,
      color: "cyan",
      values: getValuesForSaldo(),
    },
  };

  const { taxaCondominio, despesas, saldo } = topicsInfo;

  if (!Object.keys(chartData).length)
    return (
      <div className="flex items-center justify-center pt-56">
        <p className="text-3xl font-bold">Dados ainda não importados</p>
      </div>
    );

  return (
    <div className="grid grid-cols-3 grid-rows-5bg-slate-100 p-2">
      <div className="rounded-sm col-span-1 row-span-3">
        <div className="p-1">
          <TopicMainBox
            title={taxaCondominio.title}
            valueDescription={taxaCondominio.valueDescription}
            value={formatMonetaryValues(totalReceitas)}
            icon={taxaCondominio.icon}
            color={taxaCondominio.color}
          />

          <ValuesComparison
            values={taxaCondominio.values}
            color={taxaCondominio.color}
          />

          <LeftChartBars chartData={chartData} />
        </div>
      </div>

      <div className="rounded-sm  col-span-1 row-span-3">
        <div className="p-1">
          <TopicMainBox
            title={despesas.title}
            valueDescription={despesas.valueDescription}
            value={formatMonetaryValues(totalDespesas * -1)}
            icon={despesas.icon}
            color={despesas.color}
          />
          <ValuesComparison values={despesas.values} color={despesas.color} />
        </div>

        <CenterChartPie className="mt-5" chartData={chartData}/>
      </div>

      <div className="rounded-sm col-span-1 row-span-5">
        <div className="p-1">
          <TopicMainBox
            title={saldo.title}
            valueDescription={saldo.valueDescription}
            value={formatMonetaryValues(totalReceitas - totalDespesas)}
            icon={saldo.icon}
            color={saldo.color}
          />

          <ValuesComparison values={saldo.values} color={saldo.color} />
          <RightChartBars chartData={chartData} />
          <div id="RightChartRows">
            <RightChartRows chartData={chartData} />
          </div>
        </div>
      </div>

      <div className="rounded-sm col-span-2 row-span-2 ">
        <BottomChartRows chartData={chartData} />
      </div>
    </div>
  );
}

function formatMonetaryValues(value) {
  if (typeof value !== "number") {
    return null;
  }

  value = value < 0 ? value * -1 : value;

  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
