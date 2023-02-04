const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const slide1 = document.getElementsByClassName('slide-1')[0];
const slide2 = document.getElementsByClassName('slide-2')[0];
const slide3 = document.getElementsByClassName('slide-3')[0];
const slide4 = document.getElementsByClassName('slide-4')[0];
const slides = [slide1, slide2, slide3, slide4]

const btnChoix1 = document.getElementsByClassName('choix1')[0];
const btnChoix2 = document.getElementsByClassName('choix2')[0];
const btnChoix3 = document.getElementsByClassName('choix3')[0];
const btnChoix4 = document.getElementsByClassName('choix4')[0];
const slideElement = document.getElementsByClassName('slide');


var positions = [0, 100, 200, 300]
var elementActif = 0

console.log(slide1)

// document.styleSheets[0].cssRules[0].style.removeProperty("transform");
// slide1.style.transform = '';
// slide1.style.transform = "translateX(-200%);"



btnChoix1.addEventListener('click', (e) => {
    updateCarousselle(slide1);
});
btnChoix2.addEventListener('click', (e) => {
    updateCarousselle(slide2);
});
btnChoix3.addEventListener('click', (e) => {
    updateCarousselle(slide3);
});
btnChoix4.addEventListener('click', (e) => {
    updateCarousselle(slide4);
});


function updateCarousselle(slideChoisi){

    gsap.to(".slide", {
        x : () => -slideChoisi.offsetWidth*slides.indexOf(slideChoisi)-10,
        duration : .5
    });

    setTimeout(function() {
        elementActif = slides.indexOf(slideChoisi);
    }, 500);
    
}
