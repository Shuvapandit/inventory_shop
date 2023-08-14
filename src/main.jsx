import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ShoppingBagProvider } from "./pages/Shared/ShoppingBagContext/ShoppingBagContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShoppingBagProvider>
      <div className="font-sans">
        <RouterProvider router={router} />
      </div>
    </ShoppingBagProvider>
  </React.StrictMode>
);
