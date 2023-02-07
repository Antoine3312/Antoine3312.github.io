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
    updateCarousselle(slide1, slides, elementActif, ".slide");
});
btnChoix2.addEventListener('click', (e) => {
    updateCarousselle(slide2, slides, elementActif, ".slide");
});
btnChoix3.addEventListener('click', (e) => {
    updateCarousselle(slide3, slides, elementActif, ".slide");
});
btnChoix4.addEventListener('click', (e) => {
    updateCarousselle(slide4, slides, elementActif, ".slide");
});

function updateCarousselle(slideChoisi, positionSlide, eactif, slider){

    gsap.to(slider, {
        x : () => {
            if(slides.indexOf(slideChoisi) == 0){
                return -slideChoisi.offsetWidth*positionSlide.indexOf(slideChoisi);
            } else {
                return -slideChoisi.offsetWidth*positionSlide.indexOf(slideChoisi)-10;
            }
        },
        duration : .5
    });

    setTimeout(function() {
        eactif = positionSlide.indexOf(slideChoisi);
    }, 500);
    
}


const slide1_p2 = document.getElementsByClassName('slide-1-p2')[0];
const slide2_p2 = document.getElementsByClassName('slide-2-p2')[0];
const slide3_p2 = document.getElementsByClassName('slide-3-p2')[0];
const slide4_p2 = document.getElementsByClassName('slide-4-p2')[0];
const slide5_p2 = document.getElementsByClassName('slide-5-p2')[0];
const slides_p2 = [slide1_p2, slide2_p2, slide3_p2, slide4_p2, slide5_p2];



const btnChoix1_p2 = document.getElementsByClassName('choix-p2-1')[0];
const btnChoix2_p2 = document.getElementsByClassName('choix-p2-2')[0];
const btnChoix3_p2 = document.getElementsByClassName('choix-p2-3')[0];
const btnChoix4_p2 = document.getElementsByClassName('choix-p2-4')[0];
const btnChoix5_p2 = document.getElementsByClassName('choix-p2-5')[0];

var elementActif_p2 = 0


btnChoix1_p2.addEventListener('click', (e) => {
    updateCarousselle2(slide1_p2, slides_p2, elementActif_p2, ".slide-p2");
});
btnChoix2_p2.addEventListener('click', (e) => {
    updateCarousselle2(slide2_p2, slides_p2, elementActif_p2, ".slide-p2");
});
btnChoix3_p2.addEventListener('click', (e) => {
    updateCarousselle2(slide3_p2, slides_p2, elementActif_p2, ".slide-p2");
});
btnChoix4_p2.addEventListener('click', (e) => {
    updateCarousselle(slide4_p2, slides_p2, elementActif_p2, ".slide-p2");
});
btnChoix5_p2.addEventListener('click', (e) => {
    updateCarousselle2(slide5_p2, slides_p2, elementActif_p2, ".slide-p2");
});


function updateCarousselle2(slideChoisi, positionSlide, eactif, slider){

    gsap.to(slider, {
        x : () => {
            if(slides_p2.indexOf(slideChoisi) == 4){
                return -slideChoisi.offsetWidth*positionSlide.indexOf(slideChoisi)-20;
            } else if(slides_p2.indexOf(slideChoisi) == 0) {
                return -slideChoisi.offsetWidth*positionSlide.indexOf(slideChoisi);
            } else {
                return -slideChoisi.offsetWidth*positionSlide.indexOf(slideChoisi)-5;
            }
        },
        duration : .5
    });

    setTimeout(function() {
        eactif = positionSlide.indexOf(slideChoisi);
    }, 500);
    
}