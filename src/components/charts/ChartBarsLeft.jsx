import EChartsReact from "echarts-for-react";

const LeftChartBars = () => {

    const option = {
      grid: {
        width : 475,
        left :  68,
        height: 220
       },      
       xAxis: {
        max: 'dataMax',
        formatter: (value) => {
          return (+value).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }
      },
      yAxis: {
        data: ['nov. 2023', 'out. 2023','set. 2023', 'Abril','Maio', 'Junho','Julho', 'Agosto','Setembro', 'Outubro','Novembro', 'Dezembro'],
      },
      series: [
        {
          type: 'bar',
          data: [100, 200, 500, 600,100, 200, 500, 600,100, 200, 500, 600 ],
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            formatter: (params) => {
              return `R$ ${(params.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            },
          },
          itemStyle: {
            color: '#16a34a',
          },
        }
      ],
    };
    
      
    return <EChartsReact option={option}/>
}

export default LeftChartBars;