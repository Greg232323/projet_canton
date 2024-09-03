// La navigation avec hamburger-icon
const toggleButton = document.querySelector(".hamburger-icon");
const nav = document.querySelector("nav");

// Ajouter un événement de clic au bouton
toggleButton.addEventListener("click", function () {
  nav.classList.toggle("hide");
});

/*________________A RETIRER________________________*/
// Traitement caractères
const titleH1 = document.querySelector("#home-title");
titleH1.textContent = titleH1.textContent.toUpperCase();
/*_____________________________________________________*/

// Carrousel images -> page Home
const imagesSlides = [
	{ image: "1.jpg", legend: "Eclairage chez un professionnel" },
	{ image: "2.jpg", legend: "Réalisation d'un tableau électrique" },
	{ image: "3.jpg", legend: "Installation d'une climatisation" },
];

const state = {
	index: 0,
	timerId: null,
};

