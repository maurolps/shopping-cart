import { Discount } from "@mui/icons-material";
import AllShoes from "./AllShoes";
import Banner from "./Banner/Banner";
import { SpecialOffer } from "./SpecialOffer";
import { Trending } from "./Trending";

export function HomePage() {
  return (
    <div className="flex flex-col gap-4">
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
