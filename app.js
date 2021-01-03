
const navBar = document.querySelector('#navbar');//creation of navbar & event listener
const mybutton = document.getElementById("topBtn");
const collaps = document.getElementsByClassName('collapsible');
const sections = document.querySelectorAll('section');
let activeSection = document.querySelector('.active-section');
let activeNav = document.querySelector('.active-nav')

//event listener for navagating each section.
navBar.addEventListener('click', scrollNavigation);

//create the navigation bar function
function createNavBar(){
    for(const section of sections){
        newNavButton(section);
    }
    //function for activating and highlighting the section buttons
    activeClass();
}
//creating a new navigation button.
function newNavButton(section){
    const docFrag = document.createDocumentFragment();
    const button = document.createElement('li');
    button.textContent = section.dataset.nav;
    button.classList.add('menu_link');
    button.setAttribute('data-id', section.id);
    button.id = `nav-${section.dataset.nav}`;
    docFrag.appendChild(button);

    navBar.appendChild(docFrag);

    
}

//when clicked the button will take you to the navigated section.
function scrollNavigation(event){
    const section = document.querySelector(`#${event.target.dataset.id}`);
    section.scrollIntoView({behavior: 'smooth'});
}


//when clicked the navbuttons are highlighted.
function activeClass(){
    let header = document.getElementById('navbar');
    let btns = header.getElementsByClassName('menu_link');
    for(let i = 0; i <btns.length; i++){
        btns[i].addEventListener('click', function(){
            let current = document.getElementsByClassName('active-nav');
            if(current.length > 0){
                current[0].className = current[0].className.replace(' active-nav', "");
            }
            this.className += ' active-nav';
        });
    }
}

//when the user scrolls down then show button to go to top.
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

//When clicked the user is brough to the top of the document.
mybutton.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});

//when clicked the section will open
function openSection(){
    for(let i =0; i < collaps.length; i++){
        collaps[i].addEventListener('click', function(){
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if(content.style.display === 'block'){
                content.style.display = 'none';
            }
            else{
                content.style.display = 'block';
            }
        });
    }
}

//When scrolling change active class selection for the section when it's in the window view.
//function to create the navbar activated! 
createNavBar();
//open and close section function.
openSection();



function onScroll(){
    const viewportHeight = window.innerHeight;
    console.log(activeSection);
    for(const section of sections){
        const position = section.getBoundingClientRect();
        console.log(position);
        if(position.top < viewportHeight && position.bottom > viewportHeight){
            setActive(sectionID);
            setActiveNav(document.querySelector(`nav-${section.dataset.nav}`));
            break;
        }
    }
}

function setActive(sec){
    activeSection.classList.remove('active-section');
    sec.classList.add('active-section');
    activeSection = sec;
}

function setActiveNav(nav){
    navBar.classList.remove('active-nav');
    nav.classList.add('active-nav');
    navBar= nav;
}
onScroll();
