import React, { createContext, useEffect, useState } from "react";

export const navBarContext = createContext({});

export default function OpenNavBarProvider({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <navBarContext.Provider value={{ openNav, setOpenNav }}>
      {children}
    </navBarContext.Provider>
  );
}
