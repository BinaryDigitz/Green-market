import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "./context/AppProvider.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
