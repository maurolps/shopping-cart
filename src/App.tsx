import Banner from "./Components/Banner/Banner";
import { Header } from "./Components/Header/Header";
import ProductCard from "./Components/ProductCard";

export default function App() {
  const mockData = [
    {
      id: 1,
      name: "Nike Air Max 320 EVO Inspire",
      price: 210,
      sale: 0.35,
      stars: 4.5,
    },
    { id: 2, name: "Adidas Ultraboost", price: 139.22, sale: 0, stars: 4 },
  ] as const;
  return (
    <>
      <header className="bg-background shadow-sm">
        <Header />
      </header>
      <main className="flex justify-center w-full px-4 flex-col gap-5">
        <section>
          <Banner />
        </section>
        <section className="flex flex-row gap-3">
          <ProductCard product={mockData[0]} />
          <ProductCard product={mockData[1]} />
        </section>
      </main>
    </>
  );
}
