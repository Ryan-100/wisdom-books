import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";

function App() {
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
