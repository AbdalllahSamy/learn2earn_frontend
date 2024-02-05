import React, { createContext, useEffect, useState } from "react";

export const ShowIcons = createContext({});

export default function ShowIconsOnly({ children }) {
  const [showIconsOnly, setShowIconsOnly] = useState(false);
  const [hovered, setHovered] = useState(false);

  function toggleShowIconsOnly() {
    setShowIconsOnly(!showIconsOnly);
  }

  useEffect(()=>{
    if (!hovered) { 
    
    }
  }, [hovered])
  function toggleHover() {
    if (!showIconsOnly) return;
    setHovered(!hovered);
  }


  return (
    <ShowIcons.Provider
      value={{ showIconsOnly, toggleShowIconsOnly, hovered, toggleHover }}
    >
      {children}
    </ShowIcons.Provider>
  );
}
