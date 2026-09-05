import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Home() {
    const { theme } = useApp();

    return (
        <section className={`hero ${theme}`}>

            <div className="hero-content">

                <span className="badge">
                    CODVEDA TECHNOLOGY
                </span>

                <h1>
                    Building Digital Experiences
                    With <span>Modern Technology</span>
                </h1>

                <p>
                    Welcome to my React Single Page Application.
                    This project demonstrates client-side routing,
                    state management and responsive UI development.
                </p>

                <div className="hero-buttons">
                    <Link to="/about" className="primary-btn">
                        Explore More
                    </Link>

                    <Link to="/contact" className="secondary-btn">
                        Contact Me
                    </Link>
                </div>

            </div>

        </section>
    );
}

export default Home;