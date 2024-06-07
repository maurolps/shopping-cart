import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageNotFound } from "./Components/PageNotFound.tsx";
import { HomePage } from "./Components/HomePage.tsx";
import MarketPlace from "./Components/MarketPlace/MarketPlace.tsx";
import { Product } from "./Components/Product.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/marketplace", element: <MarketPlace /> },
      { path: "/product/:id", element: <Product /> },
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
