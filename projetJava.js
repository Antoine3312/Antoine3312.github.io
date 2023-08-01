// slider

const fleche_gauche = document.getElementsByClassName('arrow_left')[0];
const fleche_droit = document.getElementsByClassName('arrow_right')[0];


var positionOfSlider = 1

fleche_droit.addEventListener('click', (e) => {
    positionOfSlider ++;
    changePannel(positionOfSlider);
    updateAffichageBoutton()
});

fleche_gauche.addEventListener('click', (e) => {
    positionOfSlider --;
    changePannel(positionOfSlider);
    updateAffichageBoutton()
});


const projets = [
    document.getElementById('p1'),
    document.getElementById('p2'),
    document.getElementById('p3'),
]

function changePannel(positionOfSlider){
    gsap.to(".content",{
        x: -1*(positionOfSlider-1)*(document.getElementById('content').offsetWidth/3),
        duration : .3
    })

}

function updateAffichageBoutton(){
    if(positionOfSlider == 1) {
        fleche_gauche.style.visibility = "hidden" 
    } else {
        fleche_gauche.style.visibility = "visible" 
    }
    if(positionOfSlider == 3) {
        fleche_droit.style.visibility = "hidden" 
    } else {
        fleche_droit.style.visibility = "visible" 
    }
    console.log(positionOfSlider);
}

updateAffichageBoutton()




// menu

const open_menu_icon = document.getElementById('open_menu');
const close_menu_icon = document.getElementById('close_menu');
const menu_deroulant = document.getElementById('menu_deroulant')
const choices_menu_deroulant = document.getElementsByClassName('menu_deroulant_project_items')
const whoami = document.getElementById('whoami')
const titre_menu_deroulant = document.getElementById('titre_menu_deroulant')



function showMenu(){
    open_menu_icon.style.visibility = "hidden";
    close_menu_icon.style.visibility = "visible";
    menu_deroulant.style.visibility = "visible"
    menu_deroulant.style.animation = "menuFadeIn .5s"
    

    choices_menu_deroulant[0].style.animation = "textAppearFromBottom 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both";
    choices_menu_deroulant[1].style.animation = "textAppearFromBottom 1s .1s cubic-bezier(0.5, 0, 0.1, 1) both";
    choices_menu_deroulant[2].style.animation = "textAppearFromBottom 1s .2s cubic-bezier(0.5, 0, 0.1, 1) both";
    choices_menu_deroulant[3].style.animation = "textAppearFromBottom 1s .3s cubic-bezier(0.5, 0, 0.1, 1) both";

    whoami.style.animation = "fadeIn 1s cubic-bezier(1,0,.83,-0.03)"

    
    choices_menu_deroulant[0].style.visibility = "visible";
    choices_menu_deroulant[1].style.visibility = "visible";
    choices_menu_deroulant[2].style.visibility = "visible";
    choices_menu_deroulant[3].style.visibility = "visible";

    titre_menu_deroulant.style.visibility = "visible";
}

function closeMenu(){
    open_menu_icon.style.visibility = "visible";
    close_menu_icon.style.visibility = "hidden";
    menu_deroulant.style.animation = "menuFadeOut .5s forwards";

    choices_menu_deroulant[0].style.animation = "textDisappearFromTop .1s .3s cubic-bezier(0.5, 0, 0.1, 1) both";
    choices_menu_deroulant[1].style.animation = "textDisappearFromTop .1s .2s cubic-bezier(0.5, 0, 0.1, 1) both";
    choices_menu_deroulant[2].style.animation = "textDisappearFromTop .1s .1s cubic-bezier(0.5, 0, 0.1, 1) both";
    choices_menu_deroulant[3].style.animation = "textDisappearFromTop .1s 0s cubic-bezier(0.5, 0, 0.1, 1) both";
    
    whoami.style.animation = "fadeOut .2s  forwards"

    titre_menu_deroulant.style.visibility = "hidden";
}

// window.addEventListener("resize", function () {
//     if (window.innerWidth > 925) {
//         open_menu_icon.style.visibility = "hidden";
//         close_menu_icon.style.visibility = "hidden";  
//         menu_deroulant.style.visibility = "hidden";
//     } else {
//         open_menu_icon.style.visibility = "visible";
//     }
// });

