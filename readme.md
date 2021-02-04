![Header Logo](wireframes/header-logo.png)

# Interactive Tourist Map of Galway, Ireland

## Overview

VisitGalway is a tourist information website designed to help visitors navigate Galway City & surrounding areas, and help them to find locations to visit that are of interest to them.
The website's homepage includes site navigation, introductory information about the locality of Galway and an image carousel designed to showcase features of the city.

The main functionality of the site is an interactive map which displays places of interest by category, such as hotels, restaurants, historic sites and natural attractions. This map can be accessed by clicking the "*Plan a Visit*" link in the site navigation.
Users can select a category to view places ("*markers*") on the map, belong to that category. When a marker is clicked, an *info-window* is displayed to the user showing the marker's name, basic information, a website link related to the marker, and an "*Add to List*" button. Users can click "Add to List" to add the marker to their trip itenirary ("*Saved Places*"), visible to the right of the map or to the bottom on mobile devices. The purpose of Saved Places is to allow users to create a list of places that they intend to visit.

The website also features a *Contact* form which users can fill out and submit which triggers an e-mail to be sent to the webmaster inbox. The form contains fields for the user's *name, e-mail address* and their *message.*

# UX

## Developer Goals

* Create an informative, easy-to-use interface to attract tourists and visitors to Galway
* Provide users with information about the locality and promote it as a tourist destination
* Assist visitors to Galway in navigating the city
* Promote local business and attractions by providing them with online exposure
* Allow users to get in contact with the Visit Galway tourist information team to ask them questions
* Provide links to social media accounts run by Visit Galway for users to follow for current news and media related to tourism in Galway

## User Stories

1. As a user, I want to learn about Galway city as a tourist destination and why I should go there.
2. As a user, I want to see pictures of Galway that will give me a sense of what the city is like to visit.
3. As a user, I want to be able to navigate the whole website easily and quickly whether I am using it on my laptop, phone, or tablet device.
4. As a user, I want to submit a message to the company behind the website, know that my message has been received, and will receive a reply.
5. As a user, I want to find the company's social media platforms to follow and share with my friends.
6. As a user, I want to see a map of Galway that can give me an orientation of the place as a visitor.
7. As a user, I want to find hotels / restaurants / nightlife / historic sites / nature / activities in Galway that are worth visiting so I can make the most of my trip.
8. As a user, I want to visit the website of a place in Galway that I'm interested in going to, to learn more about it. 
9. As a user, I want an simple, easy way to remember which places I have decided to visit on my trip to Galway.

### How does this website function to meet the needs of the user as described in the User Stories?

1. The website provides a concise and helpful description of Galway city, emphasising its qualities as a tourist destination. This is presented to the user on the "Home" page, designed as the first page of the website that the user will see upon visiting.
2. The website provides a slideshow of images on the *Home* page which emphasise historical sites and cultural scenery around Galway. Captions beneath the image give insight to the images, further assisting the user in meeting the need described in User Story 1. The slideshow will automatically rotate images and their captions at set intervals. Users can navigate between images using "Previous" and "Next" buttons which are displayed on mouseover.
3. The website has been designed to be visually appealing, with simple lines and a vibrant, consistent colour scheme. The website is designed to be coherent and well-organized at all times. The website header logo and navigation are distinct from the main content of the page. The website is fully responsive, and scales in a practical manner to the user's screen size. The site navigation can be accessed by the user at any time on the top of each page. On mobile devices, to ensure optimal use of screen real estate and avoid unnecessary scrolling, a toggle-enabled navigation menu is used. The menu is hidden by default as is standard convention on mobile websites. The menu can be accessed by clicking the "hamburger" icon (three horizontal lines). The mobile navigation can be hidden by clicking this icon again. This mobile navigation is designed to simplify and de-clutter the interface, while allowing the user to smoothly navigate between each page.
4. The website provides a "Contact Us" form which can be easily accessed by clicking the "Contact" link in the desktop or mobile navigation. The link opens a modal window on the same page containing the *Contact Us* form. The use of a modal window enhances the user's experience as they do not have to click between pages to submit a message, saving them time. The user is instructed to fill out their *name, e-mail address* and a *message*. All fields are required in order for the user to receive a response - if any field is left empty, the form will not submit, and a small notification appears on the modal reminding the user to complete each field. Upon successful submission of the form when *Send Message* is clicked, the form will close, and another modal is opened confirming to the user that their message has been received. This confirmation message automatically disappears after a short period of time.
5. The website provides links to the company's three social media accounts at the bottom of the page in the form of icons of the respective social media platform.
6. The website provides an interactive map of Galway, set with a home point approximately at Eyre Square. This map can be accessed by clicking "Plan A Visit" from the homepage. The map uses Google Maps' JavaScript API, and is easy to navigate by dragging the map to move around it. The map can be zoomed in/out using the buttons on its bottom right, or by holding the Ctrl key and using the mouse scroll-wheel.
7. The website allows users to view points of interest in Galway based on category. On the "Plan A Visit" page, there is a list of *category* buttons to the left of the map (on mobile devices, this list will appear on top of the map). Clicking any of these buttons will load places on the map related to that category.
8. Once markers have been loaded to the map by clicking a category button, the user can click on an individual marker to open that marker's *info-window*. This info window displays basic information about the marker, an "Add to List" button (see point 9 below) as well as a hyperlink to a related website. (This hyperlink will open in a new tab to avoid disrupting the user's experience). 
9. The website features an interactive to-do list ("Saved Places") to which users can use to remember locations they would like to visit on their trip to Galway. This list is displayed to the right of the map, or to the bottom on mobile devices. Once markers have been loaded to the map by clicking a category button, the user can click any marker to open its *info-window*, and click "Add To List" to add the marker to Saved Places as a list item. Items can be deleted from the list by clicking the Delete (trash icon) button once the user has visited the location or changed their mind about doing so.

## Design 
![Screenshot from testing at http://ami.responsivedesign.is/](wireframes/header-screenshots.png)
[Click here to view primary wireframes.](https://rorybr1.github.io/Milestone-2/wireframes/wireframes.html)
### Concept & Font Choice
The site is designed to appear clean, professional, and uncomplicated while also appearing vibrant and welcoming.
Clean lines are used throughout and a design choice was made to avoid rounded border-corners on buttons and page divisions.
A single font, *"Roboto"*, is used for the header, site navigation, headings and body content. A design choice was made to avoid 
the use of multiple font families; headers are emphasised by using colour and larger font size.
As the website is aimed to attract tourists, a vibrant background image is used that compliments the main colour scheme of the website.
(See diagram below for further breakdown of the site's colour scheme). The background image has been blurred to ease readability and 
avoid distracting from the main content.
[FontAwesome](https://fontawesome.com/) Icons are used in the site navigation & on the "Plan A Visit" page (on category buttons and the "Saved Places" list, as well as in
the footer (for social media links) to illustrate their meaning.
### Colours
Three main colours are used in throughout the site. 
Burgundy - *rgba(103, 19, 29)*;
Dark Royal Blue - *rgba(40, 98, 168)*;
Deep Purple - *rgba(20, 9, 73)*;
as well as White *rgba(255,255,255)* and Black *rgba(0,0,0)*.
These colours are used with varying opacity throughout the site. See the images below demonstrating the consistent use of these
colours throughout the site.
![Colour scheme on Home page and Contact Us modal](wireframes/color-scheme-index.png)
![Colour scheme on Plan A Visit](wireframes/color-scheme-map.png)
![COlour scheme on mobile navigation](wireframes/color-scheme-mobile-menu.png)

# Features
The following is a list of the main functionalities of the site, built to fulfill the needs of the user as described in User Stories above.
## Site Navigation
![Site navigation bar](wireframes/feature-navbar.png)<br>
Desktop navigation bar used to navigate between pages of the site and open the Contact Us modal.
## Mobile Site Navigation
![Mobile navigation bar](wireframes/feature-mobile-navbar.gif) <br>
Toggle-enabled mobile navigation bar used to navigate the site on mobile devices.
## Image Slideshow
![Image slideshow](wireframes/feature-slideshow.png) <br>
Displayed on homepage allowing users to view images of the area conveniently.
## Social Media Links
![Social media links](wireframes/feature-footer.png)<br>
Displayed in footer. When clicked, opens the relevant social media website in a new window. 
This allows users to access more tourist-related content about Galway produced by the web team.
## "Contact Us" Modal Window
![Contact Us modal window](wireframes/contact-modal.png)<br>
Modal window opened when "Contact" is clicked either on the desktop or mobile navigation.
User is prompted to enter their name, e-mail address, and a message to send to the web team. 
The modal window can be closed by clicking the "X" in the top-right corner of the modal.
* ![Contact Us error message shown when the user attempts to submit an incomplete form](wireframes/feature-error-message.png)<br>
