import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useAppSelector } from "../../features/hooks";

function CartReview() {
  const resume = useAppSelector((store) => store.cart.resume);

  const quantity = resume.quantity;
  const subTotal = resume.subTotal;
  const discount = subTotal * resume.discount;
  const total = resume.subTotal * (1 - resume.discount);

  return (
    <>
      <div className="text-sm flex justify-between gap-2 text-text font-medium">
        <span className=" ">Cart</span>
        <div>
          <span className="text-text-variant font-normal">{`(${quantity} Items) `}</span>
          <span>{`$${subTotal.toFixed(2)}`}</span>
        </div>
      </div>
      <hr />

      <div className="flex justify-between text-text-variant">
        <span>Subtotal</span>
        <span>{`$${subTotal.toFixed(2)}`}</span>
      </div>

      <div className="flex justify-between text-text-variant">
        <span>Discount</span>
        <span>{`(${resume.discount * 100}%) $${discount.toFixed(2)}`}</span>
      </div>
      <div className="flex justify-between text-text-variant">
        <span>Total</span>
        <span>{`$${total.toFixed(2)}`}</span>
      </div>
    </>
  );
}

function ShippingReview() {
  return (
    <>
      <div className="text-sm flex justify-between gap-2 text-text font-medium">
        <span className=" ">Shipping</span>
        <div>
          <span className="text-text-variant font-normal line-through text-xs">
            ($9.99)
          </span>
          <span> free</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-text-variant">
        <span>Name</span>
        <span>John Doe</span>
      </div>
      <div className="flex justify-between text-text-variant">
        <span>Address</span>
        <span>123 Main St, New York - NY (10001)</span>
      </div>
    </>
  );
}

function PaymentReview() {
  return (
    <>
      <div className="text-sm flex justify-between gap-2 text-text font-medium">
        <span className=" ">Payment</span>
        <div>
          <CreditCardIcon />
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-text-variant">
        <span>Name</span>
        <span>John Doe</span>
      </div>
      <div className="flex justify-between text-text-variant">
        <span>Card number</span>
        <span>... 3456</span>
      </div>
    </>
  );
}

export default function Review() {
  const resume = useAppSelector((store) => store.cart.resume);
  const total = resume.subTotal * (1 - resume.discount);
  return (
    <>
      <div className="text-xs flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <CartReview />
        </div>

        <div className="flex flex-col gap-1">
          <ShippingReview />
        </div>
        <div className="flex flex-col gap-1">
          <PaymentReview />
        </div>

        <div className="flex justify-between font-bold text-base my-2">
          <span>Total</span>
          <span>{`$${total.toFixed(2)}`}</span>
        </div>
      </div>
    </>
  );
}
