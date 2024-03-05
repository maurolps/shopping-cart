import mockData from "./mockData.json";

function CounterInput() {
  return (
    <div className="w-fit rounded border border-text-variant text-sm">
      <div className="flex flex-row w-full rounded relative  ">
        <button
          data-action="decrement"
          className="text-text-variant hover:text-text hover:bg-foreground h-full w-5 rounded-l-[3px] cursor-pointer outline-none"
        >
          <span className="m-auto ">-</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-5   hover:text-black focus:text-black   flex items-center  "
          name="custom-input-number"
          value="1"
        ></input>
        <button
          data-action="increment"
          className="text-text-variant hover:text-text h-full w-5 rounded-r-[3px] cursor-pointer hover:bg-foreground"
        >
          <span className="m-auto ">+</span>
        </button>
      </div>
    </div>
  );
}

export default function Cart() {
  const salePrice = (sale: number) => (150 * (1 - sale)).toFixed(2);
  return (
    <div className="w-80 p-3 shadow">
      <div className="flex flex-col gap-2">
        <span className="text-lg text-text font-bold">Cart</span>
        {mockData.slice(0, 3).map((data) => (
          <>
            <hr />
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-foreground "></div>
              <div className="w-full flex flex-col justify-between text-xs">
                <div>
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
                <div className="flex justify-between">
                  <CounterInput />
                  <span className="text-text-variant hover:text-text hover:bg-foreground  cursor-pointer px-1 flex items-center">
                    X
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
