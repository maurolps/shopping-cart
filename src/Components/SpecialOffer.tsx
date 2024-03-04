export function SpecialOffer() {
  return (
    <>
      <div className="grid grid-cols-2 gap-20  p-10  min-w-[900px] max-w-screen-lg mx-auto bg-gradient-to-r from-primary via-slate-500 to-slate-500">
        <div className="p-10 flex flex-col">
          <div className="text-white text-sm uppercase">Special Offer</div>
          <div className="text-white text-3xl font-bold p-4 uppercase">
            NEW <br /> Asics Gel-Kayano Ultrawave
          </div>
          <div className="text-foreground text-sm  p-4">
            <p>
              Get ready! Improve your footwear collection with our exclusive
              offer on ASICS Gel sneakers!
            </p>
            <p>
              Designed for maximum comfort, durability, and style. ASICS Gel is
              the ultimate choice for athletes and fashion enthusiasts alike.
            </p>
          </div>
          <div className="p-4">
            <button className="bg-call text-white text-sm px-2 p-2 w-fit uppercase ">
              see offer
            </button>
          </div>
        </div>
        <div className="w-full h-96 bg-slate-600"></div>
      </div>
    </>
  );
}
