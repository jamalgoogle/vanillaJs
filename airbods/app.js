let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');


document.onkeydown = function(e){
    e = e || window.event;
    switch (e.which || e.keyCode){
        case 39: showSlider('next');
        break;
        case 37: showSlider('prev');
        break;
        case 13: carousel.classList.add('showDetail');
        break;
        case 27: carousel.classList.remove('showDetail');
        break;
    }
}

const showSlider = (type) => {
    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0])
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length -1]);
        carousel.classList.add('prev');
    }
;}
