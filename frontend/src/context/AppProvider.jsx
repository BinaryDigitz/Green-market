import React, { useState } from "react";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

function AppProvider({ children }) {
  const navigate = useNavigate();
 const [ user, setUser ] = useState(true)
 const [ isSeller, setIsSeller ] = useState(false)
 const [showLoginPage, setShowLoginPage ] = useState(false)
 function closeAllMenu(){

 }

  const values = {
    navigate,
    user, 
    setUser,
    setIsSeller,
    isSeller,
    closeAllMenu,
    showLoginPage,
    setShowLoginPage
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
