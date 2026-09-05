import { useApp } from "../context/AppContext";

function About() {
    const { theme } = useApp();

    return (
        <section className={`page-section ${theme}`}>

            <div className="content-card">

                <span className="badge">
                    ABOUT
                </span>

                <h1>
                    About This Project
                </h1>

                <p>
                    This Single Page Application is developed using
                    React and React Router. It provides smooth
                    navigation between multiple pages without
                    reloading the browser.
                </p>

                <div className="features">

                    <div className="feature">
                        <h3>React</h3>
                        <p>Component-based user interface.</p>
                    </div>

                    <div className="feature">
                        <h3>React Router</h3>
                        <p>Fast client-side navigation.</p>
                    </div>

                    <div className="feature">
                        <h3>Context API</h3>
                        <p>Global application state management.</p>
                    </div>

                    <div className="feature">
                        <h3>Responsive</h3>
                        <p>Works across different screen sizes.</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;