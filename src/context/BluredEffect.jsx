import React, { createContext, useEffect, useState } from "react";

export const BluredEffect = createContext({});

export default function BluredEffectProvider({ children }) {
  const [bluredContext, setBluredContext] = useState(false);

  return (
    <BluredEffect.Provider value={{ bluredContext, setBluredContext }}>
      {children}
    </BluredEffect.Provider>
  );
}
