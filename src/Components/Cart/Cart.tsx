import { ShoppingCartOutlined } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { toggleCart } from "../../features/cartSlice";

function CounterInput() {
  return (
    <div className="w-fit rounded border border-slate-200 text-sm">
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
    quantity?: number;
  };
};

function LoadProduct({ product }: LoadProductProps) {
  const salePrice = () => (product.price * (1 - product.sale)).toFixed(2);
  return (
    <>
      <div className="flex gap-2">
        <div className="w-16 h-16 bg-foreground "></div>
        <div className="w-full flex flex-col justify-between text-xs">
          <div>
            <div className="flex justify-between">
              <span>{product.name}</span>
              <span className="font-bold text-sm">
                ${product.sale === 0 ? product.price : salePrice()}
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
            <span className="text-text-variant hover:text-text hover:bg-foreground  cursor-pointer px-1 flex items-center shadow-sm">
              X
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

type Products = {
  id: number;
  name: string;
  price: number;
  sale: number;
  stars: number;
};

function Summary({ products }: { products: Products[] }) {
  const subTotal = products.reduce(
    (acc, { sale, price }) =>
      sale === 0 ? acc + price : acc + price * (1 - sale),
    0
  );
  const discount = subTotal * 0.1;
  const total = subTotal - discount;

  return (
    <div className="w-80 p-3">
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-base text-text-variant ">Summary</span>
        <hr />
        <div className="flex justify-between text-text my-2">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-text-variant">
          <span>Shipping</span>
          <span>free</span>
        </div>
        <div className="flex justify-between text-text-variant">
          <span>Discount</span>
          <span>(10%) ${discount.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-base my-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="bg-primary text-white font-bold text-sm w-full p-2  ">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex justify-center my-10 ">
      <div className="flex flex-col justify-center items-center w-10/12 gap-6">
        <ShoppingCartOutlined
          sx={{
            color: "rgba(var(--text-variant-color))",
            fontSize: "100px",
          }}
        />
        <div className="flex flex-col justify-center items-center">
          <span className="text-base text-text ">Your cart is empty</span>
          <span className="text-xs text-text-variant">
            Looks like you haven't added anything to your cart yet.
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const products = useAppSelector((store) => store.cart.items);
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-2 flex-col">
      <div className="w-80 p-3 ">
        <div className="flex flex-col gap-2">
          <div className="div">
            <span className="text-lg text-text font-bold">Cart</span>
            {products.length === 0 && <hr />}
          </div>
          {products.length === 0 ? (
            <EmptyCart />
          ) : (
            products.map((data) => (
              <>
                <hr />
                <LoadProduct product={data} />
              </>
            ))
          )}
        </div>
      </div>
      {products.length > 0 && <Summary products={products} />}
      <div className="flex justify-center">
        <div
          className="flex justify-center cursor-pointer w-fit"
          onClick={() => {
            dispatch(toggleCart());
          }}
        >
          {products.length === 0 ? (
            <button className="bg-primary text-white font-bold text-sm w-full p-2  ">
              Continue shopping
            </button>
          ) : (
            <span className="text-sm text-text-variant text-center hover:text-text ">
              Continue Shopping
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
