
//Global Vairables
const navBar = document.querySelector('#navbar');//creation of navbar & event listener
const mybutton = document.getElementById("topBtn"); //return to top button
const collaps = document.getElementsByClassName('collapsible'); //collapsible sections element name
const sections = document.querySelectorAll('section'); //each section of the DOM
let activeSection = document.querySelector('.active-section'); 

//event listener for navagating each section.
navBar.addEventListener('click', scrollNavigation);

//create the navigation bar function
function createNavBar(){
    for(const section of sections){
        newNavButton(section);
    }
    //function for activating and highlighting the section buttons
    activeClass();

    //event listner which will insert moving circles for the section when in viewport.
    document.addEventListener('scroll', function activeS(){
        for(const section of sections){
            if(isInViewport(section)){
                section.classList.add('activeSection');
            }else{
                section.classList.remove('activeSection');
            }
        }
    })
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


// when clicked the navbuttons are highlighted.
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
function isInViewport(element){
    const distance = element.getBoundingClientRect();
    return(
        distance.top <= 100 && 
        distance.left >= 0 &&
        distance.bottom >= 90 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Main function calls.
//function to create the navbar activated! 
createNavBar();

//open and close section function.
openSection();

