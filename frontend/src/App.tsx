import Footer from "./Components/Footer";
import Drawer from "@mui/material/Drawer";
import { useAppSelector, useAppDispatch } from "./features/hooks";
import { toggleCart } from "./features/cartSlice";
import { setProducts } from "./features/productSlice";
import { Toaster } from "sonner";
import { useEffect, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import fetchShoesData from "./features/fetchShoesData";

const Cart = lazy(() => import("./Components/Cart/Cart"));
const Header = lazy(() => import("./Components/Header/Header"));

export default function App() {
  const openCart = useAppSelector((store) => store.cart.toggleCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedShoesData = localStorage.getItem("scartShoes");
    if (storedShoesData) {
      dispatch(setProducts(JSON.parse(storedShoesData)));
    } else {
      fetchShoesData().then((res) => {
        dispatch(setProducts(res));
        localStorage.setItem("scartShoes", JSON.stringify(res));
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
      <header className="bg-background shadow-sm max-w-screen-lg mx-auto px-2 py-1 sm:py-6 sm:px-4">
        <Header />
        <section>
          <Drawer
            anchor="right"
            PaperProps={{
              sx: { width: '70%', maxWidth: '320px' }
            }}
            open={openCart}
            onClose={() => {
              dispatch(toggleCart());
            }}
          >
            <div className="p-2">
              <Suspense fallback={""}>
                <Cart />
              </Suspense>
            </div>
          </Drawer>
        </section>
      </header>
      <main className="flex justify-center p-2 sm:p-4 max-w-screen-lg mx-auto my-10">
        <Outlet />
      </main>
      <footer className="bg-primary w-full min-h-40 my-7 max-w-screen-lg mx-auto">
        <Footer />
      </footer>
    </>
  );
}
