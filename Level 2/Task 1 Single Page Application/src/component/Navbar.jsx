import { NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Navbar() {
    const { theme, toggleTheme } = useApp();

    return (
        <nav className="navbar">

            <div className="nav-logo">
                TV
            </div>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <button
                className="theme-btn"
                onClick={toggleTheme}
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>

        </nav>
    );
}

export default Navbar;