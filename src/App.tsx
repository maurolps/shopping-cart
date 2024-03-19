import { useState } from "react";
import AllShoes from "./Components/AllShoes";
import Banner from "./Components/Banner/Banner";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { SpecialOffer } from "./Components/SpecialOffer";
import { Trending } from "./Components/Trending";
import { Drawer } from "@mui/material";
import Cart from "./Components/Cart/Cart";

export default function App() {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <header className="bg-background shadow-sm min-w-[900px] max-w-screen-lg mx-auto px-4">
        <Header toggleCart={toggleCart} />
      </header>
      <main className="flex justify-center min-w-[900px] max-w-screen-lg mx-auto px-4 flex-col gap-10">
        <section>
          <Drawer
            anchor="right"
            open={openCart}
            onClose={() => {
              toggleCart();
            }}
          >
            <div className="p-2">
              <Cart toggleCart={toggleCart} />
            </div>
          </Drawer>
        </section>
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
