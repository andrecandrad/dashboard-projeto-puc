import EChartsReact from "echarts-for-react";
import PostCondominiosPeriodo from "../Requests/PostCondominiosPeriodo";


export default function LeftChartBars(){

    const option = {
      grid: {
        width : 425,
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
        data: ['nov. 2023', 'out. 2023', 'set. 2023', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      },
      series: [
        {
          type: 'bar',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
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