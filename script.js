/* ==================== DARK / LIGHT MODE ==================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // Remember user's theme preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀";
            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "☾";
            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            localStorage.setItem("theme", "light");
        }
    });
}


/* ==================== ACTIVE NAVIGATION ==================== */

const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll(
    "section[id]"
);


/* Highlight the correct navigation link while scrolling */

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + (window.innerHeight * 0.35);

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }
    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}


/* Update active link when scrolling */

window.addEventListener("scroll", function () {

    requestAnimationFrame(updateActiveNavigation);

});


/* Update active link immediately when clicking */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});


/* Set initial active section */

updateActiveNavigation();


/* ==================== RECOMMENDATION ==================== */

function addRecommendation() {

    const nameInput =
        document.getElementById("recommendation-name");

    const recommendationInput =
        document.getElementById("new-recommendation");

    const name =
        nameInput.value.trim();

    const recommendation =
        recommendationInput.value.trim();


    /* Do nothing if either field is empty */

    if (name === "" || recommendation === "") {
        return;
    }


    /* Create the new recommendation card */

    const recommendationCard =
        document.createElement("div");

    recommendationCard.className =
        "recommendation-card";


    /* Create recommendation text */

    const recommendationText =
        document.createElement("p");

    recommendationText.textContent =
        '"' + recommendation + '"';


    /* Add name below recommendation */

    const recommendationName =
        document.createElement("strong");

    recommendationName.textContent =
        "- " + name;


    /* Put everything inside the card */

    recommendationCard.appendChild(
        recommendationText
    );

    recommendationCard.appendChild(
        recommendationName
    );


    /* Add new card to the existing list */

    const recommendationList =
        document.getElementById("recommendation-list");

    if (recommendationList) {

        recommendationList.appendChild(
            recommendationCard
        );
    }


    /* Clear the form */

    nameInput.value = "";
    recommendationInput.value = "";


    /* Show popup */

    showPopup();
}


/* ==================== POPUP ==================== */

function showPopup() {

    const popup =
        document.getElementById("popup");

    if (popup) {
        popup.style.display = "flex";
    }
}


function closePopup() {

    const popup =
        document.getElementById("popup");

    if (popup) {
        popup.style.display = "none";
    }
}


/* Close popup when clicking outside the popup box */

const popup =
    document.getElementById("popup");

if (popup) {

    popup.addEventListener("click", function (event) {

        if (event.target === popup) {
            closePopup();
        }

    });
}


/* Close popup with Escape key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closePopup();
    }

});


/* ==================== HOME ICON ==================== */

const homeIcon =
    document.querySelector(".home-icon");

if (homeIcon) {

    homeIcon.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });
}
//* ==================== MOBILE MENU ==================== */

const menuToggle =
    document.getElementById("menu-toggle");

const mobileNavLinks =
    document.querySelector(".nav-links");


if (menuToggle && mobileNavLinks) {

    menuToggle.addEventListener("click", function () {

        mobileNavLinks.classList.toggle("mobile-open");


        if (mobileNavLinks.classList.contains("mobile-open")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }

    });


    /* Close menu after selecting a section */

    mobileNavLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNavLinks.classList.remove("mobile-open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}
// =========================
// CUSTOM CURSOR MOVEMENT
// =========================

const customCursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", function (event) {
    customCursor.style.left = event.clientX + "px";
    customCursor.style.top = event.clientY + "px";

    cursorDot.style.left = event.clientX + "px";
    cursorDot.style.top = event.clientY + "px";
});
// CUSTOM CURSOR HOVER EFFECT

const clickableElements = document.querySelectorAll(
    "a, button, input, textarea, .project-card, .certificate-card"
);

clickableElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        customCursor.classList.add("hover");
        cursorDot.classList.add("hover");
    });

    element.addEventListener("mouseleave", function () {
        customCursor.classList.remove("hover");
        cursorDot.classList.remove("hover");
    });
});
// =========================
// SCROLL PROGRESS BAR
// =========================

const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage = (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = scrollPercentage + "%";
});
// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card, .experience-card, .education-card, .certificate-card, .article-card, .learning-card, .recommendation-card"
);

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
// =========================
// TYPING ROLE EFFECT
// =========================

const typingRole = document.getElementById("typing-role");

const roles = [
    "Computer Science Student",
    "Front-End Developer",
    "C++ & Python Programmer"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingRole.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, 1800);
            return;
        }
    } else {
        typingRole.textContent = currentRole.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeRole, isDeleting ? 55 : 90);
}

if (typingRole) {
    typeRole();
}