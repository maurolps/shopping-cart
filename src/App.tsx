import Banner from "./Components/Banner/Banner";
import { Header } from "./Components/Header/Header";

export default function App() {
  return (
    <>
      <header className="bg-background shadow-sm">
        <Header />
      </header>
      <main className="flex justify-center w-full px-4">
        <section>
          <Banner />
        </section>
      </main>
    </>
  );
}
