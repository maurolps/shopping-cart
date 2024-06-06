import Footer from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { Drawer } from "@mui/material";
import Cart from "./Components/Cart/Cart";
import { useAppSelector, useAppDispatch } from "./features/hooks";
import { toggleCart } from "./features/cartSlice";
import { setImageUrls } from "./features/productSlice";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { fetchImageUrls } from "./features/fetchImageUrls";
import { Outlet } from "react-router-dom";

export default function App() {
  const openCart = useAppSelector((store) => store.cart.toggleCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedImageUrls = localStorage.getItem("scartImages");
    if (storedImageUrls) {
      dispatch(setImageUrls(JSON.parse(storedImageUrls)));
    } else {
      fetchImageUrls().then((res) => {
        dispatch(setImageUrls(res));
        localStorage.setItem("scartImages", JSON.stringify(res));
      });
    }
  }, [dispatch]);

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
      </header>
      {/* <main className="flex justify-center min-w-[900px] max-w-screen-lg mx-auto px-4  gap-10"> */}
      <main className="flex justify-center min-w-[900px] max-w-screen-lg mx-auto my-10">
        <Outlet />
      </main>
      <footer className="bg-primary w-full min-h-40 my-7 min-w-[900px] max-w-screen-lg mx-auto">
        <Footer />
      </footer>
    </>
  );
}
