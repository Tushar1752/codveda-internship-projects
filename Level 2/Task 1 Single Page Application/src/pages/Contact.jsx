import { useState } from "react";
import { useApp } from "../context/AppContext";

function Contact() {
    const { theme } = useApp();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={`page-section ${theme}`}>

            <div className="contact-card">

                <span className="badge">
                    CONTACT
                </span>

                <h1>
                    Get In Touch
                </h1>

                <p>
                    Feel free to contact me for software development
                    and technology related opportunities.
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        required
                    ></textarea>

                    <button type="submit" className="primary-btn">
                        Send Message
                    </button>

                </form>

                {submitted && (
                    <div className="success-message">
                        Message submitted successfully!
                    </div>
                )}

            </div>

        </section>
    );
}

export default Contact;