/* ==========================================
   Portfolio Script
   Modern + Corporate + Emerald Theme
   Author: Tanvi Pohankar
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* --------------------------------------
       1. Smooth Scroll Navigation
    -------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* --------------------------------------
       2. Scroll Reveal Animation
    -------------------------------------- */

    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    /* --------------------------------------
       3. Active Navbar Highlight
    -------------------------------------- */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-nav");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active-nav");
            }
        });
    });


    /* --------------------------------------
       4. Animated Skill Bars
    -------------------------------------- */

    const skillSection = document.querySelector(".skills");
    const skillBars = document.querySelectorAll(".skill-progress");
    let skillsAnimated = false;

    const animateSkills = () => {
        if (!skillSection) return;

        const sectionTop = skillSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100 && !skillsAnimated) {
            skillBars.forEach(bar => {
                const widthValue = bar.getAttribute("data-width");
                bar.style.width = widthValue;
            });
            skillsAnimated = true;
        }
    };

    window.addEventListener("scroll", animateSkills);

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.innerText = "Sending...";
  button.disabled = true;

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(() => {

    button.innerText = "Message Sent ✓";
    button.style.background = "#10b981";

    form.reset();

    setTimeout(() => {
      button.innerText = "Send Message";
      button.disabled = false;
      button.style.background = "";
    }, 3000);

  }).catch((error) => {
    button.innerText = "Failed ❌";
    button.disabled = false;
    console.error(error);
  });
});
    /* --------------------------------------
       5. Subtle Card Hover Lift Effect
    -------------------------------------- */

    const cards = document.querySelectorAll(".project-card, .extra-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
            card.style.transition = "all 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });


    /* --------------------------------------
       6. Page Fade-in on Load
    -------------------------------------- */

    document.body.classList.add("loaded");

});
