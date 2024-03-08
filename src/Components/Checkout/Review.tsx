import CreditCardIcon from "@mui/icons-material/CreditCard";

function CartReview() {
  return (
    <>
      <div className="text-sm flex justify-between gap-2 text-text font-medium">
        <span className=" ">Cart</span>
        <div>
          <span className="text-text-variant font-normal">(3 Items)</span>
          <span> $327.98</span>
        </div>
      </div>
      <hr />

      <div className="flex justify-between text-text-variant">
        <span>Subtotal</span>
        <span>$364.43</span>
      </div>

      <div className="flex justify-between text-text-variant">
        <span>Discount</span>
        <span>(10%) $36.44</span>
      </div>
      <div className="flex justify-between text-text-variant">
        <span>Total</span>
        <span>327.98</span>
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
          <span>$327.98</span>
        </div>
      </div>
    </>
  );
}
