import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./scenes/Home/Home";
import Navbar from "./scenes/Global/Navbar";
import Footer from "./scenes/Global/Footer";
import CartMenu from "./scenes/Global/CartMenu";
import { useEffect } from "react";
import Checkout from "./scenes/checkout/Checkout";
function App() {
  const ScroolToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0,0);
    }, [pathname]);
  };
  return (
    <div className="app">
      <BrowserRouter>

        <Navbar />
        <CartMenu />
        <ScroolToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
