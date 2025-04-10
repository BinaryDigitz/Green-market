import React, { createContext, useState } from "react";

export const AdminContext = createContext();
function AdminProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const baseUrl = 'http://localhost:2500'
  //  const [] =useState(false)
  const values = {
    isLoggedIn,
    setLoggedIn,
    products,
    setProducts,
    baseUrl
  };

  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
}

export default AdminProvider;
