let menubutton=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .navbar');
let searchForm=document.querySelector('.header .search-form');//select the searchbar
let loginForm=document.querySelector('.header .login-form');//select the loginform
let loginformcloseButton=document.querySelector('.header .login-form #close-button');


let productBnnerNextbtn=document.querySelector('.products .navigation .next-btn');
let productBnnerPrevbtn=document.querySelector('.products .navigation .prev-btn');
let productBnnerSlides=document.querySelectorAll('.slide');
let productBnnerslideIcons=document.querySelectorAll('.slide-icon');
let productBnnernumberslideIcons=productBnnerSlides.length;
var slideNumber=0;

productBnnerNextbtn.onclick=()=>{
    productBnnerSlides.forEach((slide)=>{slide.classList.remove("active")});
    productBnnerslideIcons.forEach((slideIcon)=>{slideIcon.classList.remove("active")});
    slideNumber++;

    if(slideNumber >(productBnnernumberslideIcons-1)){
        slideNumber=0;
    }

    productBnnerSlides[slideNumber].classList.add("active");
    productBnnernumberslideIcons[slideNumber].classList.add("active");
};

menubutton.onclick=()=>{
    menubutton.classList.toggle('fa-times');
    navbar.classList.toggle('active-navbar');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}
loginformcloseButton.onclick=()=>{
    loginForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active-navbar');
    menubutton.classList.remove('fa-times');
    loginForm.classList.remove('active');
   
};



document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active-navbar');
    menubutton.classList.remove('fa-times');
    searchForm.classList.remove('active');
};

document.querySelector('#searchclosebutton').onclick=()=>{
    searchForm.classList.remove('active');
}


navbar.onclick=()=>{
    navbar.classList.remove('active-navbar');
    menubutton.classList.remove('fa-times');
}

menubutton.onscroll=()=>{
    menubutton.classList.remove('fa-times');
    navbar.classList.remove('active-navbar');
}