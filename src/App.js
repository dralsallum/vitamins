import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/services" exact Component={Services} />
        <Route path="/products" exact Component={Products} />
        <Route path="/sign-up" exact Component={SignUp} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
