import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Sidebar, Navbar, Products, Login } from "./components/exportComp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
          <div>
            <Sidebar />
          </div>
        </header>
        <main>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <footer>footer</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
