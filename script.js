// Modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
        formMessage.innerText = "All fields are required.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.match(emailPattern)) {
        formMessage.innerText = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerText = "Message sent successfully!";
    formMessage.style.color = "green";
});
