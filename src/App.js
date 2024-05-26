import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";
import React from "react";
import { GlobalDebug } from "./remove-consoles";

function App() {
  React.useEffect(() => {
    // (process.env.NODE_ENV === "production" ||
    //  process.env.REACT_APP_ENV === "STAGING") &&
      GlobalDebug(false);
  }, []);

  console.log("I am just another dummy console log, suppose to be suppressed 🙂");

  return (
    <Router>
      <main className="relative min-h-screen">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourite />} />
            <Route path = "/book/:id" element = {<BookDetails />} />
          </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
