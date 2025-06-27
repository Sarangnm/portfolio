document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");
    const icon = hamburger.querySelector("i");
    const navLinks = document.querySelectorAll(".nav-links");

    // Toggle on hamburger click
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent it from closing immediately
        navbar.classList.toggle("active");
        document.body.classList.toggle("noscroll");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });

    // Hide navbar on clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            document.body.classList.remove("noscroll");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    // Hide navbar on clicking outside
    document.addEventListener("click", (e) => {
        const isClickInside = navbar.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInside && navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            document.body.classList.remove("noscroll");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
    const skillBtn = document.getElementById("skillBtn");
    const eduBtn = document.getElementById("eduBtn");
    const skills = document.getElementById("skills");
    const education = document.getElementById("education");
    skillBtn.addEventListener("click", () => {
        skills.classList.add("active-menu");
        skillBtn.classList.add("active-tab");
        education.classList.remove("active-menu");
        eduBtn.classList.remove("active-tab");
    });
    eduBtn.addEventListener("click", () => {
        education.classList.add("active-menu");
        eduBtn.classList.add("active-tab");
        skills.classList.remove("active-menu");
        skillBtn.classList.remove("active-tab");
    });
    //form submission//
    const form = document.getElementById('contact-form');
    const status = document.getElementById('msg');

    form.addEventListener('submit', function () {
        setTimeout(() => {
        status.style.display = 'block';
        }, 500);
    });
});