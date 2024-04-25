import EChartsReact from "echarts-for-react";

const BottomChartRows = () => {

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
        left: '0.5%',
        right: '1.5%',
        bottom: '6.5X%',
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
          data: [320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 5330],
          itemStyle: {
            color: '#09A84491',
          },
        },
        {
          name: 'Despesas',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290],
          itemStyle: {
            color: '#B6060081',
          },
        }
      ]
    };
    
      
    return <EChartsReact option={option}/>
}

export default BottomChartRows;