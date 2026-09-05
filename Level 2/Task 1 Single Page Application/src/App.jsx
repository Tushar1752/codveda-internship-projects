import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useApp } from "./context/AppContext";

function App() {
    const { theme } = useApp();

    return (
        <div className={`app ${theme}`}>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <footer>
                <p>© 2026 Tushar Verma. Built with React.</p>
            </footer>
        </div>
    );
}

export default App;