import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SortAge from "./components/SortAge";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sortage" element={<SortAge />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
