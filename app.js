/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


const activeNav = document.querySelector('.active-nav');

const navBar = document.querySelector('#navbar');//creation of navbar

const navFind = document.getElementById('navbar'); //evemt listener

const sections = document.querySelectorAll('section');

sections.forEach(section => {

});
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function buildNavButton(){

    const docFrag = document.createDocumentFragment();

    let section1 = document.createElement('li');
    let section2 = document.createElement('li');
    let section3 = document.createElement('li');

    section1.textContent = 'about';
    section2.textContent = 'portfolio';
    section3.textContent = 'contact';

    docFrag.appendChild(section1);
    docFrag.appendChild(section2);
    docFrag.appendChild(section3);

    navBar.appendChild(docFrag);

}
    
function scrollNav(){

    //if about is clicked. go to about

    //if portfolio is clicked go to portfolio

    //if contact go to contact.
}

buildNavButton();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active