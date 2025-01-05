// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const services = document.querySelectorAll(".service-item");
    const pricing = document.querySelectorAll(".pricing-item");
    const submitButton = document.querySelector("button[type='submit']");

    // Form submit handling with animation
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        submitButton.innerText = "Submitting...";

        setTimeout(() => {
            alert("Thank you for contacting us!");
            form.reset();
            submitButton.disabled = false;
            submitButton.innerText = "Submit";
        }, 1500);
    });

    // Add hover animation for service and pricing boxes
    services.forEach((service) => {
        service.addEventListener("mouseenter", () => {
            service.style.transform = "scale(1.1)";
            service.style.boxShadow = "0 0 30px #00ff00";
        });
        service.addEventListener("mouseleave", () => {
            service.style.transform = "scale(1)";
            service.style.boxShadow = "none";
        });
    });

    pricing.forEach((price) => {
        price.addEventListener("mouseenter", () => {
            price.style.transform = "scale(1.1)";
            price.style.boxShadow = "0 0 30px #00ff00";
        });
        price.addEventListener("mouseleave", () => {
            price.style.transform = "scale(1)";
            price.style.boxShadow = "none";
        });
    });

    // Fade-in animation for sections on scroll
    const fadeInSections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInSections.forEach((section) => {
        fadeInOnScroll.observe(section);
    });
});
