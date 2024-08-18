const slider = document.querySelector('#slider > div');
const slides = slider.children;
const [prevBtn, nextBtn, sliderCounter] = ['prevBtn', 'nextBtn', 'sliderCounter'].map(id => document.getElementById(id));
let currentSlide = 0;


document.getElementById('user-profile-icon').addEventListener('click', function() {
    const userOptions = document.getElementById('user-options');
    userOptions.classList.toggle('hidden'); // Toggle visibility - 1st click shows, 2nd click hides 
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    sliderCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

[prevBtn, nextBtn].forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentSlide = (currentSlide + (index ? 1 : -1) + slides.length) % slides.length;
        updateSlider();
    });
});

updateSlider();


 document.getElementById('mobile-menu-button').addEventListener('click', function() {
     var menu = document.getElementById('mobile-menu');
     menu.classList.toggle('hidden');
 });