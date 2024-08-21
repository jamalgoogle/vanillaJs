
//---------------start of  slider functionality ----------------//
const slider = document.querySelector('#slider > div');
const slides = slider.children;
const [prevBtn, nextBtn, sliderCounter] = ['prevBtn', 'nextBtn', 'sliderCounter'].map(id => document.getElementById(id));
let currentSlide = 0;
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
// -----------------End of slider functionality----------------//


//--------------start Mobile menu toggle functionality ----------------//
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});
//  -------------End of Mobile menu toggle functionality --------------//


// ---------------Scroll to Top Button Functionality---------------//
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ---------------End of Scroll to Top Button Functionality---------------//


// ---------------Start of Download CV Functionality---------------//
function downloadCV(event) {
    event.preventDefault();
    const link = document.createElement('a');
    console.log(link);
    link.href = './assets/myCv.pdf'; // Replace with the actual path to your CV 
    link.download = 'myCv.pdf'; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// ---------------End of Download CV Functionality---------------//
