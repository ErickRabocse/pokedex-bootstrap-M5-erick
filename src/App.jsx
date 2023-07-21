import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./routes/Index";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
