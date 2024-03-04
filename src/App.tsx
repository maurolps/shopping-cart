import AllShoes from "./Components/AllShoes";
import Banner from "./Components/Banner/Banner";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { SpecialOffer } from "./Components/SpecialOffer";
import { Trending } from "./Components/Trending";

export default function App() {
  return (
    <>
      <header className="bg-background shadow-sm max-w-screen-lg mx-auto">
        <Header />
      </header>
      <main className="flex justify-center w-full px-4 flex-col gap-10">
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
      </main>

      <footer className="bg-primary w-full min-h-40 my-7 min-w-[900px] max-w-screen-lg mx-auto">
        <Footer />
      </footer>
    </>
  );
}
