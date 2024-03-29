import AllShoes from "./Components/AllShoes";
import Banner from "./Components/Banner/Banner";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { SpecialOffer } from "./Components/SpecialOffer";
import { Trending } from "./Components/Trending";
import { Drawer } from "@mui/material";
import Cart from "./Components/Cart/Cart";
import { useAppSelector, useAppDispatch } from "./features/hooks";
import { toggleCart } from "./features/cartSlice";
import { Toaster } from "sonner";

export default function App() {
  const openCart = useAppSelector((store) => store.cart.toggleCart);
  const dispatch = useAppDispatch();

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2500,
          classNames: {
            icon: "text-primary",
          },
        }}
      />
      <header className="bg-background shadow-sm min-w-[900px] max-w-screen-lg mx-auto px-4">
        <Header />
      </header>
      <main className="flex justify-center min-w-[900px] max-w-screen-lg mx-auto px-4 flex-col gap-10">
        <section>
          <Drawer
            anchor="right"
            open={openCart}
            onClose={() => {
              dispatch(toggleCart());
            }}
          >
            <div className="p-2">
              <Cart />
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
