import Banner from "./Components/Banner/Banner";
import { Header } from "./Components/Header/Header";
import ProductCard from "./Components/ProductCard";

export default function App() {
  return (
    <>
      <header className="bg-background shadow-sm">
        <Header />
      </header>
      <main className="flex justify-center w-full px-4 flex-col gap-5">
        <section>{/* <Banner /> */}</section>
        <section>
          <ProductCard />
        </section>
      </main>
    </>
  );
}
