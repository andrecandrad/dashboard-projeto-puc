import EChartsReact from "echarts-for-react";

const BottomRightChartRows = () => {

  const option = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [

      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
        itemStyle: {
          color: '#0488A8AD',
        },
      }
  
    ]
  };


  return <EChartsReact option={option} />
}

export default BottomRightChartRows;