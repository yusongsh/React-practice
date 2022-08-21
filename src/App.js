import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SortAge from "./components/SortAge";
import Search from "./components/Search";
import HideShow from "./components/HideShow";
import ApiCall from "./components/ApiCall";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sortage" element={<SortAge />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hideshow" element={<HideShow />} />
        <Route path="/api" element={<ApiCall />} />
      </Routes>
    </div>
  );
}

export default App;
