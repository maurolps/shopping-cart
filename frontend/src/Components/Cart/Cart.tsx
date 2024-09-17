import { ShoppingCartOutlined } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { toggleCart, updateQuantity, removeProduct } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import React from "react";

type LoadProductProps = {
  product: {
    name: string;
    sale: number;
    price: number;
    stars: number;
    id: number;
    quantity?: number;
  };
  imgUrl?: string;
};

function CounterInput({ product }: LoadProductProps) {
  const dispatch = useAppDispatch();
  const handleQuantityChange = (subtract = false) => {
    const newProduct = Object.assign({}, product);
    if (!newProduct.quantity) newProduct.quantity = 1;
    subtract ? (newProduct.quantity -= 1) : (newProduct.quantity += 1);
    if (newProduct.quantity <= 0) {
      newProduct.quantity = 1;
    }
    if (newProduct.quantity > 10) {
      newProduct.quantity = 10;
    }
    dispatch(updateQuantity(newProduct));
  };
  return (
    <div className="w-fit rounded border border-slate-200 text-sm">
      <div className="flex flex-row w-full rounded relative  ">
        <button
          onClick={() => handleQuantityChange(true)}
          className="text-text-variant hover:text-text hover:bg-foreground h-full w-5 rounded-l-[3px] cursor-pointer outline-none"
        >
          <span className="m-auto ">-</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-5   hover:text-black focus:text-black   flex items-center  "
          name="quantity-input"
          value={product.quantity}
          readOnly
        ></input>
        <button
          onClick={() => handleQuantityChange()}
          className="text-text-variant hover:text-text h-full w-5 rounded-r-[3px] cursor-pointer hover:bg-foreground"
        >
          <span className="m-auto ">+</span>
        </button>
      </div>
    </div>
  );
}

function LoadProduct({ product, imgUrl }: LoadProductProps) {
  const dispatch = useAppDispatch();

  const salePrice = () =>
    (product.price * (1 - product.sale) * (product.quantity || 1)).toFixed(2);

  const handleRemove = () => {
    dispatch(removeProduct(product.id));

  }
  return (
    <>
      <div className="flex gap-2">
        <div className="flex justify-center w-16 h-16 bg-foreground ">
          {imgUrl && (
            <img
              src={imgUrl}
              alt=""
              loading="lazy"
              width={"90%"}
              className="object-contain"
            />
          )}
        </div>
        <div className="w-full flex flex-col justify-between text-xs">
          <div>
            <div className="flex justify-between">
              <span>{product.name}</span>
              <span className="font-bold text-sm">
                $
                {product.sale === 0
                  ? (product.price * (product.quantity || 1)).toFixed(2)
                  : salePrice()}
              </span>
            </div>
            <div>
              {product.sale !== 0 && (
                <div className="flex gap-2">
                  <span className="text-text-variant line-through">
                    ${product.price}
                  </span>
                  <span className="text-call text-[10px] bg-red-50 flex items-center">
                    {product.sale * 100}% off
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <CounterInput product={product} />
            <span className="text-text-variant hover:text-text hover:bg-foreground  cursor-pointer px-1 flex items-center shadow-sm"
              onClick={handleRemove}>
              X
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Summary() {
  const subTotal = useAppSelector((store) => store.cart.resume.subTotal);
  const discountFactor = useAppSelector((store) => store.cart.resume.discount);
  const userName = useAppSelector((store) => store.cart.resume.userName);
  const discount = subTotal * discountFactor;
  const total = subTotal - discount;

  return (
    <div className="p-3">
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
          <span>({userName} {discountFactor * 100}%) ${discount.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-base my-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
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

function CartActions({ isCartEmpty }: { isCartEmpty: boolean }): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <>
      {!isCartEmpty && (
        <Link to="/checkout">
          <button
            className="bg-primary text-white font-bold text-sm w-full p-2  "
            onClick={() => dispatch(toggleCart())}
          >
            Proceed to checkout
          </button>
        </Link>
      )}
      <div className="flex justify-center">
        <div
          className="flex justify-center cursor-pointer w-fit"
          onClick={() => {
            dispatch(toggleCart());
          }}
        >
          {isCartEmpty ? (
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
    </>
  );
}

export default function Cart() {
  const products = useAppSelector((store) => store.cart.items);
  const isCartEmpty = products.length === 0;

  return (
    <div className="flex gap-2 flex-col ">
      <div className="p-3 ">
        <div className="flex flex-col gap-2">
          <div className="div">
            <span className="text-lg text-text font-bold">Cart</span>
            {isCartEmpty && <hr />}
          </div>
          {isCartEmpty ? (
            <EmptyCart />
          ) : (
            products.map((data) => (
              <React.Fragment key={data.id}>
                <hr />
                <LoadProduct product={data} imgUrl={data.imgUrl} />
              </React.Fragment>
            ))
          )}
        </div>
      </div>
      {!isCartEmpty && <Summary />}
      <CartActions isCartEmpty={isCartEmpty} />
    </div>
  );
}
