import Discount from "./Discount";
import AllShoes from "./AllShoes";
import Banner from "./Banner/Banner";
import { SpecialOffer } from "./SpecialOffer";
import { Trending } from "./Trending";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-14">
      <section>
        <Banner />
      </section>
      <section>
        <Trending />
      </section>
      <section>
        <AllShoes />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <Discount />
      </section>
    </div>
  );
}
