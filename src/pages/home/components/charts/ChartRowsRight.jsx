import EChartsReact from "echarts-for-react";

const BottomRightChartRows = () => {

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
      left: '3%',
      right: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['dez. 2022', 'jan. 2023', 'fev. 2023', 'mar. 2023', 'abr. 2023', 'mai. 2023', 'jun. 2023','jul. 2023', 'ago. 2023','set. 2023', 'out. 2023','nov. 2023']
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
        data: [100,50,300,600,800,600,500,800,1100,1000,1600,1200],
        itemStyle: {
          color: '#047D9BB7',
        },
      }
    ]
  };


  return <EChartsReact option={option} />
}

export default BottomRightChartRows;