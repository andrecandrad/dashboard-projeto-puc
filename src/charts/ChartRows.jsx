import EChartsReact from "echarts-for-react";

const BottomChartRows = ({chartData}) => {

  const total_despesas = chartData.totais || {};

  const total_receitas = chartData.totais || {};

  // Extract and sort the months
  const months = Object.keys(total_despesas).sort();

  // Map the saldos values to the corresponding months and format the months
  const formattedMonths = months.map(month => {
    const [monthPart, yearPart] = month.split('/');
    const monthNames = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
    return `${monthNames[parseInt(monthPart, 10) - 1]}\n ${yearPart}`;
  });

  // Construct the source array
  const source1 = months.map(month => total_despesas[month].total_despesas);
  const source2 = months.map(month => total_receitas[month].total_receitas);



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
      legend: {
        data: ['Taxa de condomínio', 'Despesas']
      },
      grid: {
        left: '1%',
        right: '3%',
        bottom: '2.5%',
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
          name: 'Despesas',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top',
            formatter: (params) => {
              return `R$ ${(+params.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            },
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: source1,
          itemStyle: {
            color: '#B6060081',
          },
        },
        {
          name: 'Taxa de condomínio',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top',
            formatter: (params) => {
              return `R$ ${(+params.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            },
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: source2,
          itemStyle: {
            color: '#09A84491',
          },
        }
      ]
    };
    
      
    return <EChartsReact option={option}/>
}

export default BottomChartRows;