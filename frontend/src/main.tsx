import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* eslint-disable */
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
const HomePage = lazy(() => import("./Components/HomePage"));
const MarketPlace = lazy(() => import("./Components/MarketPlace/MarketPlace"));
const Product = lazy(() => import("./Components/Product"));
const Checkout = lazy(() => import("./Components/Checkout/Checkout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={""}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={""}>
        <PageNotFound />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/marketplace",
        element: (
          <Suspense fallback={""}>
            <MarketPlace />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={""}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={""}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
