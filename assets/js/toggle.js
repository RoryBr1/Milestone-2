const menuButton = document.getElementById("menu-button");
const mobileNav = document.getElementById("mobile-nav");
const contactButton = document.getElementById("contact-button");
const contactButtonMob = document.getElementById("contact-button-mob");
const contactWindow = document.getElementById("contact-window");
const contactCloseButton = document.getElementById("close-window");
const sendButton = document.getElementById("send-button");
const sentConfirmation = document.getElementById("sent-confirmation");
const contactForm = document.getElementById("contact-form")
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const usermessage = document.getElementById("usermessage");
const formError = document.getElementById("form-error-message");

menuButton.addEventListener("click", toggleMobNav);
contactButton.addEventListener("click", openContactWindow);
contactButtonMob.addEventListener("click", openContactWindow);
contactCloseButton.addEventListener("click", closeWindow);
sendButton.addEventListener("click", messageSent);

function toggleMobNav() {
	mobileNav.classList.toggle("visible");
	menuButton.classList.toggle("menu-button-clicked");
}

function openContactWindow() {
	contactWindow.classList.remove("invisible");
	contactWindow.classList.add("visible");
}

function closeWindow() {
	contactWindow.classList.remove("visible");
	contactWindow.classList.add("invisible");
	formError.classList.remove("visible");
	formError.classList.add("invisible");
}

function messageSent() {
	function displayErrorMessage(){
		formError.classList.remove("invisible");
		formError.classList.add("visible");
	}

	if (username.value.length == 0){
		displayErrorMessage();
	} else { 
	if (useremail.value.length == 0){
		displayErrorMessage();
	} else {
	if (usermessage.value.length == 0){
		displayErrorMessage();
	} else {

	contactWindow.classList.remove("visible");
	contactWindow.classList.add("invisible");
	sentConfirmation.classList.remove("invisible");
	sentConfirmation.classList.add("visible");
	setTimeout(function() {
		sentConfirmation.classList.remove("visible");
		sentConfirmation.classList.add("invisible");
	}, 1600);
	contactForm.reset();
	formError.classList.remove("visible");
	formError.classList.add("invisible");
	};
}}
}