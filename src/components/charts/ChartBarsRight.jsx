import EChartsReact from "echarts-for-react";

const RightChartBars = () => {
  const option = {
    dataset: {
      source: [
        ['amount', 'product'],
        [132654, 'jan. 2023'],
        [645789, 'fev. 2023'],
        [392584, 'mar. 2023'],
        [457812, 'abr. 2023'],
        [895623, 'mai. 2023'],
        [657821, 'jun. 2023'],
        [455678, 'jul. 2023'],
        [121223, 'ago. 2023'],
        [899756, 'set. 2022'],
        [456231, 'out. 2023'],
        [654578, 'nov. 2023'],
        [231245, 'dez. 2023']
      ]
    },
    grid: {
      width: 450,
      left: 90,
      height: 620
    },
    xAxis: {
      axisLabel: {
        formatter: (value) => {
          return (+value).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }
      }
    },
    yAxis: { type: 'category' },
    series: [
      {
        type: 'bar',
        encode: {
          x: 'amount',
          y: 'product'
        },
        label: {
          show: true,
          position: 'right',
          formatter: (params) => {
            return `R$ ${(+params.value[0]).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          },
          valueAnimation: true
        },
        itemStyle: {
          color: '#0891b2',
        },
      }
    ]
  };

  return <EChartsReact option={option} />;
};

export default RightChartBars;
