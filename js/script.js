let menubutton=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .navbar');

menubutton.onclick=()=>{
    menubutton.classList.toggle('fa-times');
    navbar.classList.toggle('active-navbar');
}