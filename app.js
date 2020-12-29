

const activeNav = document.querySelector('.active-nav');

const navBar = document.querySelector('#navbar');//creation of navbar & event listener
const activeS = document.querySelectorAll('.activeSection');
navBar.addEventListener('click', scrollNavigation);
const mybutton = document.getElementById("topBtn");
const collaps = document.getElementsByClassName('collapsible');

function createNavBar(){
    const sections = document.querySelectorAll('section');
    for(section of sections){
        newNavButton(section);
    }
    activeClass();
}
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
            let current = document.getElementsByClassName('active');
            if(current.length > 0){
                current[0].className = current[0].className.replace(' active', "");
            }
            this.className += ' active';
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

//function to create the navbar activated! 
createNavBar();
//open and close section function.
openSection();
