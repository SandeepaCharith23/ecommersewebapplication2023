let menubutton=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .navbar');
let searchForm=document.querySelector('.header .search-form');//select the searchbar
let loginForm=document.querySelector('.header .login-form');//select the loginform

menubutton.onclick=()=>{
    menubutton.classList.toggle('fa-times');
    navbar.classList.toggle('active-navbar');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active-navbar');
    loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active-navbar');
    searchForm.classList.remove('active');
};


navbar.onclick=()=>{
    navbar.classList.remove('active-navbar');
    menubutton.classList.remove('fa-times');
}

menubutton.onscroll=()=>{
    menubutton.classList.remove('fa-times');
    navbar.classList.remove('active-navbar');
}