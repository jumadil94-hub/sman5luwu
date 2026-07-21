/**
 * =====================================================
 * main.js
 * Website Sekolah
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", initApp);

/**
 * Entry Point
 */
function initApp() {
    initAOS();
    initGalleryFilter();
    initTeacherFilter();
    initLightbox();
    initFooter();
}

/* =====================================================
   AOS
===================================================== */

function initAOS() {
    if (typeof AOS === "undefined") return;

    AOS.init({
        duration: 800,
        once: true
    });
}

/* =====================================================
   ISOTOPE (Reusable)
===================================================== */

function createIsotopeFilter({
    container,
    itemSelector,
    buttonSelector
}) {
    if (typeof Isotope === "undefined") return;

    const grid = document.querySelector(container);

    if (!grid) return;

    const buttons = document.querySelectorAll(buttonSelector);

    if (!buttons.length) return;

    const isotope = new Isotope(grid, {
        itemSelector,
        layoutMode: "fitRows"
    });

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter || "*";

            isotope.arrange({
                filter
            });

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

        });

    });
}

function initGalleryFilter() {

    createIsotopeFilter({
        container: ".gallery-container",
        itemSelector: ".gallery-item",
        buttonSelector: ".filter-btn"
    });

}

function initTeacherFilter() {

    createIsotopeFilter({
        container: ".teacher-container",
        itemSelector: ".teacher-item",
        buttonSelector: ".teacher-btn"
    });

}

/* =====================================================
   GLIGHTBOX
===================================================== */

function initLightbox() {

    if (typeof GLightbox === "undefined") return;

    GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true
    });

}

/* =====================================================
   FOOTER
===================================================== */

function initFooter() {
    updateCopyrightYear();
    initBackToTop();
}

function updateCopyrightYear() {

    const year = document.getElementById("year");

    if (!year) return;

    year.textContent = new Date().getFullYear();

}

/* =====================================================
   BACK TO TOP
===================================================== */

function initBackToTop() {

    const button = document.getElementById("backTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        button.classList.toggle(
            "show",
            window.scrollY > 500
        );

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
