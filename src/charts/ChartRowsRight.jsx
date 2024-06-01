import EChartsReact from "echarts-for-react";

const BottomRightChartRows = ({ chartData }) => {
  const saldos = chartData.saldos || {};

  // Extract and sort the months
  const months = Object.keys(saldos).sort();

  // Map the saldos values to the corresponding months and format the months
  const formattedMonths = months.map(month => {
    const [monthPart, yearPart] = month.split('/');
    const monthNames = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
    return `${monthNames[parseInt(monthPart, 10) - 1]}\n ${yearPart}`;
  });

  // Construct the source array
  const source = months.map(month => saldos[month]);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: formattedMonths
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Taxa de condomínio',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: source,
        itemStyle: {
          color: '#047D9BB7',
        },
      }
    ]
  };

  return <EChartsReact option={option} />
}

export default BottomRightChartRows;
