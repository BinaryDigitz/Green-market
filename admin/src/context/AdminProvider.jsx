import React, { createContext, useLayoutEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export const AdminContext = createContext();

function AdminProvider({ children }) {
 
 const navigate = useNavigate()
 const [token, setToken ] = useState(() => localStorage.getItem('adminToken') || null)
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const baseUrl = 'http://localhost:2500'

  
  useLayoutEffect(() =>{
    token && setLoggedIn(true)
  },[token])
  //  const [] =useState(false)
  const values = {
    isLoggedIn,
    setLoggedIn,
    products,
    setProducts,
    baseUrl,
    navigate
  };

  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
}

export default AdminProvider;
