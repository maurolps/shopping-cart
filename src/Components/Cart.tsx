import mockData from "./mockData.json";

export default function Cart() {
  const salePrice = (sale: number) => (150 * (1 - sale)).toFixed(2);
  return (
    <div className="w-80 bg-slate-300 p-2">
      <div className="flex flex-col gap-2">
        <span className="text-lg text-text font-bold">Cart</span>
        {mockData.slice(0, 3).map((data) => (
          <>
            <hr />
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-foreground border border-text-variant"></div>
              <div className="flex-grow bg-red-50 flex flex-col text-xs">
                <div className="flex justify-between">
                  <span>{data.name}</span>
                  <span className="font-bold text-sm">
                    ${data.sale === 0 ? "150.00" : salePrice(data.sale)}
                  </span>
                </div>
                <div>
                  {data.sale !== 0 && (
                    <div className="flex gap-2">
                      <span className="text-text-variant line-through">
                        ${150}
                      </span>
                      <span className="text-call text-[10px] bg-red-50 flex items-center">
                        {data.sale * 100}% off
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
