import React, { useState } from "react";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

function AppProvider({ children }) {
  const navigate = useNavigate();
 const [ user, setUser ] = useState(null)
 const [ isSeller, setIsSeller ] = useState(false)

  const values = {
    navigate,
    user, 
    setUser,
    setIsSeller,
    isSeller
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
