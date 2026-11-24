// MENU DE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// FERMER LE MENU APRES UN CLIC

const liens = document.querySelectorAll(".nav-links a");

liens.forEach(function(lien) {
    lien.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// FORMULAIRE DE CONTACT

const formulaire = document.getElementById("contact-form");
const message = document.getElementById("form-message");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent =
        "Merci ! Votre demande a bien été préparée.";

    formulaire.reset();
});