import { Route, Routes } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Footer from "./components/organisms/Footer/Footer";
import NewsAbout from "./pages/AboutNews";
import ProductAbout from "./pages/ProductAbout";
import CategoryAbout from "./pages/CategoryAbout";

function App() {
  return (
    <div className="App">
      <Root />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsAbout />} />
        <Route path="/products/:id" element={<ProductAbout />} />
        <Route path="/category/:id" element={<CategoryAbout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
