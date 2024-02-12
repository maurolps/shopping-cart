import Banner from "./Components/Banner/Banner";
import { Header } from "./Components/Header/Header";

export default function App() {
  return (
    <>
      <header className="bg-foreground shadow-sm">
        <Header />
      </header>
      <main className="flex justify-center">
        <section>
          <Banner />
        </section>
      </main>
    </>
  );
}
