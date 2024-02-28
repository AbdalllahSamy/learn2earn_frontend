import { useEffect } from "react";
import "./App.css";
import RoutingHandler from "./Routing/RoutingHandler";
import ShowIconsOnly from "./context/openNavBar";
import BluredEffectProvider from "./context/BluredEffect";
import OpenNavBarProvider from "./context/openNavBar";

function App() {
  return (
    <OpenNavBarProvider>
        <RoutingHandler />
    </OpenNavBarProvider>
  );
}

export default App;
