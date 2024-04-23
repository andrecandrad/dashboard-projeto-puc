import EChartsReact from "echarts-for-react";

const Chart = () => {

    const option = {
      yAxis: {
        data: [],
      },
      series: [
        {
          type: 'bar',
          data: [100, 200, 500, 600, ],
          label: {
            show: true,
            position: 'right',
            valueAnimation: true
          }
        }
      ],
    };
    
      
    return <div className="teste"><EChartsReact option={option}/></div>
}

export default Chart;