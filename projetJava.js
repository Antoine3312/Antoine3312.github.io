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



var elementActif = 0




btnChoix1.addEventListener('click', (e) => {
    updateCarousselle(slide1, slides);
});
btnChoix2.addEventListener('click', (e) => {
    updateCarousselle(slide2, slides);
});
btnChoix3.addEventListener('click', (e) => {
    updateCarousselle(slide3, slides);
});
btnChoix4.addEventListener('click', (e) => {
    updateCarousselle(slide4, slides);
});


function updateCarousselle(slideChoisi, positionSlide){

    gsap.to(".slide", {
        x : () => -slideChoisi.offsetWidth*positionSlide.indexOf(slideChoisi)-10,
        duration : .5
    });

    setTimeout(function() {
        elementActif = positionSlide.indexOf(slideChoisi);
    }, 500);
    
}
