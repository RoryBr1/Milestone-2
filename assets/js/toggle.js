/* This script is used for all functionality where visibility is interactively toggled for an element.
	- Mobile navigation menu visibility
	- Contact form visibility
	- Contact form verification and visibility of related error messages
	- #sent-confirmation visibility upon successful form submission

	Toggle functionality is done by toggling, adding and removing the classes .visible and .invisible, defined in assets/css/style.css.
*/

/* Constants, variables */
const menuButton = document.getElementById("menu-button"); /* #menu-button is the mobile menu "burger icon" visible at mobile resolution */
const mobileNav = document.getElementById("mobile-nav"); /* #mobile-nav is the list of navigation links, visible by default until #menu-button is clicked */
const contactButton = document.getElementById("contact-button"); /* contact button on desktop nav bar */
const contactButtonMob = document.getElementById("contact-button-mob"); /* contact button on mobile nav bar */
const contactWindow = document.getElementById("contact-window"); /* contact modal window */
const contactCloseButton = document.getElementById("close-window"); /* "x" button on contact modal */
const sendButton = document.getElementById("send-button"); /* "send message >" button on contact modal */
const sentConfirmation = document.getElementById("sent-confirmation"); /* confirmation modal shown upon successful form submission */
const contactForm = document.getElementById("contact-form") /* the <form> element within the contact modal */
const username = document.getElementById("username"); 
const useremail = document.getElementById("useremail"); 
const usermessage = document.getElementById("usermessage");
const formError = document.getElementById("form-error-message"); /* error message shown if inputs left blank */
const emailError = document.getElementById("form-error-email-message") /* error message shown if email is incorrect format */
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; /* used to verify that email input is actually an email. This code was taken from https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript */

/* Event listeners */
menuButton.addEventListener("click", toggleMobNav);
contactButton.addEventListener("click", openContactWindow);
contactButtonMob.addEventListener("click", openContactWindow);
contactCloseButton.addEventListener("click", closeWindow);
sendButton.addEventListener("click", messageSent);

/* Toggle mobile navigation when #menu-button is clicked */
function toggleMobNav() {
	mobileNav.classList.toggle("visible");
	menuButton.classList.toggle("menu-button-clicked");
}

/* Open contact window when Contact button on desktop or mobile site is clicked */
function openContactWindow() {
	contactWindow.classList.remove("invisible");
	contactWindow.classList.add("visible");
}

/* Close contact window modal when "X" button on top right of modal is clicked */
function closeWindow() {
	contactWindow.classList.remove("visible");
	contactWindow.classList.add("invisible");
	formError.classList.remove("visible");
	formError.classList.add("invisible");
}

/* Display #sent-confirmation after form verification */
function messageSent() {

	/* function to display error message if form fields are left blank */
	function displayErrorMessage(){
		formError.classList.remove("invisible");
		formError.classList.add("visible");
	}

	/* function to display error message if email format is not correct */
	function displayEmailError(){
		emailError.classList.remove("invisible");
		emailError.classList.add("visible");
	}

	/* Form verification; username must not be empty, useremail must not be empty, usermessage must not be empty, useremail must match mailformat */
	if (username.value.length == 0){
		displayErrorMessage();
	} else { 
	if (useremail.value.length == 0){
		displayErrorMessage();
	} else {
	if (usermessage.value.length == 0){
		displayErrorMessage();
	} else {
	if (!useremail.value.match(mailformat)){
		displayEmailError();
	} else {

	/* if all above requirements met, the code below will:
		1. close the contact window
		2. display #sent-confirmation
		3. after 1600 milliseconds, hide the #sent-confirmation
		4. reset all form fields so that the form is empty if opened again
		5. remove any visible form error messages
	*/

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
	emailError.classList.remove("visible");
	emailError.classList.add("invisible");
	};
}}
}}