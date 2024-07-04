import Footer from "./Components/Footer";
import Drawer from "@mui/material/Drawer";
import { useAppSelector, useAppDispatch } from "./features/hooks";
import { toggleCart } from "./features/cartSlice";
import { setImageUrls } from "./features/productSlice";
import { Toaster } from "sonner";
import { useEffect, lazy, Suspense } from "react";
import { fetchImageUrls } from "./features/fetchImageUrls";
import { Outlet } from "react-router-dom";

const Cart = lazy(() => import("./Components/Cart/Cart"));
const Header = lazy(() => import("./Components/Header/Header"));

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
              <Suspense fallback={""}>
                <Cart />
              </Suspense>
            </div>
          </Drawer>
        </section>
      </header>
      <main className="flex justify-center min-w-[900px] max-w-screen-lg mx-auto my-10">
        <Outlet />
      </main>
      <footer className="bg-primary w-full min-h-40 my-7 min-w-[900px] max-w-screen-lg mx-auto">
        <Footer />
      </footer>
    </>
  );
}
