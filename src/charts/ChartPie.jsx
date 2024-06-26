import EChartsReact from "echarts-for-react";

const CenterChartPie = ({ chartData }) => {
  const months = Object.keys(chartData.transacoes);

  let folhaPagamento = 0;
  let manutencaoInstalacoes = 0;
  let custeio = 0;
  let encargos = 0;
  let despesasAdm = 0;

  months.forEach((m) => {
    const despesas = chartData.transacoes[m].Despesa;

    const tiposDeDespesas = Object.keys(despesas);

    tiposDeDespesas.forEach((d) => {
      const despesaValue = parseFloat(despesas[d]);

      switch (d) {
        case "Folha de pagamento":
          folhaPagamento += despesaValue;
          break;

        case "Manutenções e instalações":
          manutencaoInstalacoes += despesaValue;
          break;

        case "Custeio":
          custeio += despesaValue;
          break;

        case "Encargos":
          encargos += despesaValue;
          break;

        case "Despesas administrativas":
          despesasAdm += despesaValue;
          break;

        default:
          break;
      }
    });
  });

  const formatNumber = (number) => {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const data = [
    { value: folhaPagamento, name: "Folha de pagamento" },
    { value: manutencaoInstalacoes, name: "Manutenções e instalações" },
    { value: custeio, name: "Custeio" },
    { value: encargos, name: "Encargos" },
    { value: despesasAdm, name: "Despesas administrativas" },
  ].filter((d) => d.value > 0);

  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const option = {
    tooltip: {
      trigger: "item",
      formatter: (params) => {
        const percent = ((params.value / total) * 100).toFixed(2);
        return `${params.name}: ${formatNumber(params.value)} (${percent}%)`;
      },
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        type: "pie",
        radius: ["30%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#fff",
          borderWidth: 0,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };

  return <EChartsReact option={option} />;
};

export default CenterChartPie;
