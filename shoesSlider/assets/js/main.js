/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(n=>console.log(n))
navToggle.addEventListener("click", ()=>{
   navMenu.classList.add('show-menu');
});   
navClose.addEventListener("click", ()=>{
   navMenu.classList.remove('show-menu');
})   


/*=============== REMOVE MENU MOBILE ===============*/
navLink.forEach(n=> n.addEventListener("click", ()=>{
   navMenu.Classlist.add('hide-menu');
}));   



/*=============== SWIPER SNEAKERS ===============*/

let swiperImages = new Swiper('.home__swiper', {
   loop: true,
   spaceBetween: 64,
   grabCursor: true,
   centeredSlides: true,
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     type: 'fraction'
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   }
 });


let swiperTitles = new Swiper('.home__titles', {
   loop: true,
   spaceBetween: 64,
   grabCursor: true,
   centeredSlides: true,

 });

 swiperImages.controller.control = swiperTitles
 swiperTitles.controller.control = swiperImages
/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = ()=>{
   const header = document.getElementById('header');
   this.scrollY >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);
   