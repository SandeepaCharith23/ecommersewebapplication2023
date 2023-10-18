let menubutton=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .navbar');

menubutton.onclick=()=>{
    menubutton.classList.toggle('fa-times');
    navbar.classList.toggle('active-navbar');
}

navbar.onclick=()=>{
    navbar.classList.remove('active-navbar');
    menubutton.classList.remove('fa-times');
}

menubutton.onscroll=()=>{
    menubutton.classList.remove('fa-times');
    navbar.classList.remove('active-navbar');
}