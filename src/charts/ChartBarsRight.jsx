import EChartsReact from "echarts-for-react";

const RightChartBars = ({ chartData }) => {
  const saldos = chartData.saldos || {};

  // Extract and sort the months
  const months = Object.keys(saldos).sort();

  // Map the saldos values to the corresponding months and format the months
  const formattedMonths = months.map(month => {
    const [monthPart, yearPart] = month.split('/');
    const monthNames = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
    return `${monthNames[parseInt(monthPart, 10) - 1]} ${yearPart}`;
  });

  // Construct the source array
  const source = [['amount', 'product']];
  months.forEach((month, index) => {
    source.push([saldos[month], formattedMonths[index]]);
  });

  const option = {
    dataset: {
      source: source
    },
    grid: {
      width: 450,
      left: 64,
      height: 220,
      top: 30,
      bottom: 0
    },
    xAxis: {
      axisLabel: {
        formatter: (value) => {
          return (+value).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }
      }
    },
    yAxis: { type: 'category' },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        return (params.value[1] + " - R$ " + (params.value[0]).toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
      },
    },
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
