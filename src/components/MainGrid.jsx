import BottomChartRows from "../pages/home/components/charts/ChartRowsLeft";
import TaxaDeCondominio from "../pages/home/components/TaxaDeCondominio";
import Despesas from "../pages/home/components/Despesas";
import Saldo from "../pages/home/components/Saldo";

const MainGrid = () => {
  
  const valores = [158661.0, 14064.0, 36837.59];

  return (
    <div className="grid grid-cols-3 grid-rows-5 bg-slate-100">
      <TaxaDeCondominio valores={valores} />
      <Despesas valores={valores} />
      <Saldo valores={valores} />
      <div className="col-span-2 row-span-2">
        <BottomChartRows />
      </div>
    </div>
  );
};

export default MainGrid;
