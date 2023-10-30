import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Shop from "./Components/Shop";

function App() {
  return (
    <>
      <div className="pt-20">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="shop/:shopId" element={<Shop />} />
          <Route path="*" element={<>404 Not found</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
