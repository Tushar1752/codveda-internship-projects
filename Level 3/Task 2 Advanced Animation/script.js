const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");

    menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

window.addEventListener("load", () => {

    if (typeof gsap === "undefined") {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const intro = gsap.timeline();

    intro
        .from(".header", {
            y: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".hero-label", {
            y: 25,
            opacity: 0,
            duration: 0.6
        })
        .from(".hero h1", {
            y: 70,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
        .from(".hero-content > p", {
            y: 30,
            opacity: 0,
            duration: 0.7
        })
        .from(".hero-buttons", {
            y: 25,
            opacity: 0,
            duration: 0.6
        })
        .from(".scroll-indicator", {
            opacity: 0,
            duration: 0.5
        });

    gsap.to(".circle-one", {
        x: 80,
        y: 50,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".circle-two", {
        x: -60,
        y: -40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".card-one", {
        y: -20,
        rotation: 3,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".card-two", {
        y: 18,
        rotation: -3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".card-three", {
        y: -15,
        rotation: 2,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.utils.toArray(".section-header").forEach(section => {

        gsap.from(section, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 82%"
            }
        });

    });

    gsap.utils.toArray(".skill-card").forEach((card, index) => {

        gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 88%"
            }
        });

    });

    gsap.utils.toArray(".project-card").forEach((card, index) => {

        gsap.from(card, {
            x: index % 2 === 0 ? -70 : 70,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 88%"
            }
        });

    });

    gsap.from(".about-text", {
        x: -60,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
            trigger: ".about-grid",
            start: "top 80%"
        }
    });

    gsap.from(".about-card", {
        x: 60,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
            trigger: ".about-grid",
            start: "top 80%"
        }
    });

    gsap.from(".contact-box", {
        scale: 0.94,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact-box",
            start: "top 82%"
        }
    });

    gsap.to(".scroll-line", {
        scaleX: 1.8,
        transformOrigin: "left",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (window.matchMedia("(pointer:fine)").matches) {

    document.addEventListener("mousemove", event => {

        gsap.to(cursorDot, {
            x: event.clientX - 3,
            y: event.clientY - 3,
            duration: 0.05
        });

        gsap.to(cursorRing, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.18,
            ease: "power2.out"
        });

    });

    document.querySelectorAll("a, button, .skill-card, .project-card").forEach(element => {

        element.addEventListener("mouseenter", () => {

            gsap.to(cursorRing, {
                scale: 1.6,
                borderColor: "#8b5cf6",
                duration: 0.25
            });

        });

        element.addEventListener("mouseleave", () => {

            gsap.to(cursorRing, {
                scale: 1,
                borderColor: "rgba(255,255,255,0.6)",
                duration: 0.25
            });

        });

    });
}