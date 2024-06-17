import EChartsReact from "echarts-for-react";

const BottomChartRows = ({ chartData }) => {
  const total_despesas = chartData.totais || {};
  const total_receitas = chartData.totais || {};

  // Extract and sort the months
  const months = Object.keys(total_despesas).sort();

  // Map the saldos values to the corresponding months and format the months
  const formattedMonths = months.map((month) => {
    const [monthPart, yearPart] = month.split("/");
    const monthNames = [
      "jan.",
      "fev.",
      "mar.",
      "abr.",
      "mai.",
      "jun.",
      "jul.",
      "ago.",
      "set.",
      "out.",
      "nov.",
      "dez.",
    ];
    return `${monthNames[parseInt(monthPart, 10) - 1]}\n ${yearPart}`;
  });

  // Construct the source array
  const source1 = months.map((month) => total_despesas[month].total_despesas);
  const source2 = months.map((month) => total_receitas[month].total_receitas);

  const option = {
    xAxis: {
      type: "category",
      data: formattedMonths,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
      formatter: (params) => {
        let tooltip = `${params[0].name}<br/>`;
        params.forEach((param) => {
          tooltip += `${param.marker} ${param.seriesName}: R$ ${(+param.value).toLocaleString(
            "pt-BR",
            { minimumFractionDigits: 2 }
          )}<br/>`;
        });
        return tooltip;
      },
    },
    legend: {
      data: ["Taxa de condomínio", "Despesas"],
    },
    grid: {
      left: "1%",
      right: "3%",
      bottom: "7%",
      top: "10%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Taxa de condomínio",
        data: source2,
        type: "line",
        label: {
          show: false,
          position: "top",
          formatter: (params) => {
            return `R$ ${(+params.value).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}`;
          },
        },
        itemStyle: {
          color: "#09A84491",
        },
      },
      {
        name: "Despesas",
        data: source1,
        type: "line",
        label: {
          show: false,
          position: "top",
          formatter: (params) => {
            return `R$ ${(+params.value).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}`;
          },
        },
        itemStyle: {
          color: "#B6060081",
        },
      },
    ],
  };

  return <EChartsReact option={option} />;
};

export default BottomChartRows;
