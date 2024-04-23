import EChartsReact from "echarts-for-react";

const CenterChartPie = () => {

    const option = {
      grid:{
        width: 20,
        height: 20
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '14.2%',
        right: ' 10',
        orient: 'vertical',
        align: 'left'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '65%'],
          center: ['38%', '37%'],
          data: [
            { value: 335, name: 'Folha de pagamento' },
            { value: 310, name: 'Manutenção e instalações' },
            { value: 274, name: 'Custeio' },
            { value: 235, name: 'Encargos' },
            { value: 400, name: 'Despesas administrativas' }
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: '#000'
          },
          labelLine: {
            lineStyle: {
              color: '#000'
            },
            smooth: 0.3,
            length: 7,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
    
      
    return <EChartsReact option={option}/>
}

export default CenterChartPie;

