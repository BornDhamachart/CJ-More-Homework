import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Shop from "./Pages/Shop";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="pt-12 pl-16">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="shop/:shopId" element={<Shop />} />
          <Route path="*" element={<>404 Not found</>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
