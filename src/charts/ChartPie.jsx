import EChartsReact from "echarts-for-react";

const CenterChartPie = ({ chartData }) => {


  const categoriasDespesas = [
    'Custeio',
    'Despesas administrativas',
    'Encargos',
    'Manutenções e instalações',
  ];

  const totalDespesas = categoriasDespesas.reduce((acc, categoria) => {
    acc[categoria] = 0;
    Object.values(chartData.transacoes).forEach(mes => {
      if (mes.Despesa[categoria] !== undefined) {
        acc[categoria] += mes.Despesa[categoria];
      }
    });
    return acc;
  }, {});

  const data1 = Object.entries(totalDespesas).map(([name, value]) => ({value,name,}));

  
  const data = [
    { value: 335, name: 'Folha de pagamento' },
    { value: 310, name: 'Manutenção e instalações' },
    { value: 274, name: 'Custeio' },
    { value: 235, name: 'Encargos' },
    { value: 400, name: 'Despesas administrativas' },
  ];


  const option = {
    grid:{
      width: 20,
      height: 20
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {d}%'
    },
    legend: {
      orient: 'horizontal',
      align: 'left',
      top: '10'
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
        name: 'Despesa',
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['50%', '165'],
        data: data.sort((a, b) => a.value - b.value),
        roseType: 'radius',
        label: {
          show: true,
          color: '#000',
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
      }
    ]
  };

  return <EChartsReact option={option}/>
}

export default CenterChartPie;