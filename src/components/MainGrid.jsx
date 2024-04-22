import { RiMoneyDollarCircleFill } from "react-icons/ri";

const MainGrid = () => {
  const colors = [];
  const valores = [158661.0, 14064.0, 36837.59];
  const maxValue = Math.max(...valores);

  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-14 bg-slate-200 w-full h-full p-14">
      <div className="border-2 border-red-300 rounded-sm shadow-lg col-span-1 row-span-3">
        <div className="bg-gray-300 py-7 rounded-xl flex flex-col gap-3">
          <div className="flex justify-center items-center gap-5">
            <RiMoneyDollarCircleFill className="text-7xl text-green-600" />
            <h2 className="text-3xl font-semibold">Taxa de condomínio</h2>
          </div>
          <div className="flex justify-center items-center gap-5 pl-10">
            <h4 className="text-xl font-semibold">Valor total no período:</h4>
            <h3 className="text-2xl text-green-600 font-bold">R$ 5.000.000</h3>
          </div>
        </div>

        {/* novo componente */}
        <div className="flex flex-col text-lg">
          {/* maxvalue */}
          {/* {2 + 2 == 4 ? (
            <div
              className="bg-green-600/40 flex justify-between px-4 py-1 rounded-full"
              // style={{ width: `${tamanho}` }}
            >
              <p>Valor Máximo</p> <p>R$600,000</p>
            </div>
          ) : null}

          {2 + 2 == 4 ? <p>texto</p> : null}

          {2 + 2 == 4 ? <p>texto</p> : null} */}

          {valores.map((val, i) => {
            return (
              <div
                className="bg-green-600/40 flex justify-between px-4 py-1 rounded-full min-2"
                style={{ width: `${(val / maxValue) * 60}%`}}
              >
                <p>Valor Máximo</p> <p>{`R$ ${val}`}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-2 border-gray-300 rounded-sm shadow-lg col-span-1 row-span-3">
        a
      </div>
      <div className="border-2 border-gray-300 rounded-sm shadow-lg col-span-1 row-span-5">
        as
      </div>
      <div className="border-2 border-gray-300 rounded-sm shadow-lg col-span-2 row-span-2">
        a
      </div>
    </div>
  );
};

export default MainGrid;
