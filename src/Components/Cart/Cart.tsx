import { running } from "../mockData.json";

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

type LoadProductProps = {
  product: {
    name: string;
    sale: number;
    price: number;
  };
};

function LoadProduct({ product }: LoadProductProps) {
  const salePrice = (sale: number) => (150 * (1 - sale)).toFixed(2);
  return (
    <>
      <div className="flex gap-2">
        <div className="w-16 h-16 bg-foreground "></div>
        <div className="w-full flex flex-col justify-between text-xs">
          <div>
            <div className="flex justify-between">
              <span>{product.name}</span>
              <span className="font-bold text-sm">
                ${product.sale === 0 ? product.price : salePrice(product.sale)}
              </span>
            </div>
            <div>
              {product.sale !== 0 && (
                <div className="flex gap-2">
                  <span className="text-text-variant line-through">${150}</span>
                  <span className="text-call text-[10px] bg-red-50 flex items-center">
                    {product.sale * 100}% off
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
  );
}

function Summary() {
  return (
    <div className="w-80 p-3 shadow">
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-base text-text-variant ">Summary</span>
        <hr />
        <div className="flex justify-between text-text my-2">
          <span>Subtotal</span>
          <span>$364.43</span>
        </div>
        <div className="flex justify-between text-text-variant">
          <span>Shipping</span>
          <span>free</span>
        </div>
        <div className="flex justify-between text-text-variant">
          <span>Discount</span>
          <span>(10%) $36.44</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-base my-2">
          <span>Total</span>
          <span>$327.98</span>
        </div>
        <button className="bg-primary text-white font-bold text-sm w-full p-2  ">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <div className="flex gap-2 flex-col">
      <div className="w-80 p-3 shadow">
        <div className="flex flex-col gap-2">
          <span className="text-lg text-text font-bold">Cart</span>
          {running.slice(0, 3).map((data) => (
            <>
              <hr />
              <LoadProduct product={data} />
            </>
          ))}
        </div>
      </div>
      <Summary />
    </div>
  );
}
