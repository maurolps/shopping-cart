export default function Banner() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4  my-10   p-4 ">
        <div className=" flex flex-col gap-6 max-w-md ">
          <span className="font-revans text-7xl text-start">
            Fashion, <br /> Meets Comfort.
          </span>
          <hr />
          <span className="text-start text-sm max-w-sm text-text-variant">
            Our mission is to elevate your every step, offering an extensive
            selection of footwear that merges fashion-forward trends with
            unparalleled comfort and quality.
          </span>
          <button className="bg-primary text-white font-bold w-fit p-2">
            SHOP NOW
          </button>
        </div>
        <div className="max-w-sm">
          <span className="">Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
    </>
  );
}
