export default function Footer() {
  return (
    <>
      <div className="flex justify-evenly p-4 text-white text-xs">
        <div className="max-w-40 flex flex-col gap-2">
          <span className="font-bold text-sm">Shopping Cart</span>
          <span className="italic">
            This is not a real store. This project is intended to explore the
            concepts of a full-stack web development with React.
          </span>
        </div>
        <div className="max-w-40 flex flex-col gap-2">
          <span className=" font-bold">Helpful Links</span>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Information</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="max-w-40 flex flex-col gap-2">
          <span className=" font-bold">Contact</span>
          <span className="italic">
            See more on
            <br />
            <a
              className="text-blue-500"
              href="https://github.com/maurolps/shopping-cart"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
