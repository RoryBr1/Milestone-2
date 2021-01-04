const menuButton = document.getElementById("menu-button");
const mobileNav = document.getElementById("mobile-nav");

menuButton.addEventListener("click", toggle);

function toggle() {
	mobileNav.classList.toggle("visible");
	menuButton.classList.toggle("menu-button-clicked");
}