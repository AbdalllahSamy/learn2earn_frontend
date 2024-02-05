import "./App.css";
import RoutingHandler from "./Routing/RoutingHandler";
import ShowIconsOnly  from "./context/ShowIconsOnly";
function App() {
  return (
    <ShowIconsOnly>
      <RoutingHandler />
    </ShowIconsOnly>
  );
}

export default App;
