//gsap

const choix1 = document.getElementsByClassName('choix')[0];
const choix2 = document.getElementsByClassName('choix')[1];
const choix3 = document.getElementsByClassName('choix')[2];
const choix4 = document.getElementsByClassName('choix')[3];

var h1Elements = document.getElementsByTagName("h1");
var h2Elements = document.getElementsByTagName("h2");
var discoveryCardElements = document.getElementsByClassName("discover_card");


choix1.addEventListener('click', (e) => {
    console.log('test');
    choix1.style.flex = "8";
    choix2.style.flex = "1";
    choix3.style.flex = "1";
    choix4.style.flex = "1";
    for(var i = 0; i < h1Elements.length; i++) {
        if(i!=0) {
            retireMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='hidden';
            discoveryCardElements[i].style.visibility='hidden';
        } else {
            afficheMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='visible';
            discoveryCardElements[i].style.visibility='visible';
        }
    }  
}) 

choix2.addEventListener('click', (e) => {
    console.log('test');
    choix2.style.flex = "8";
    choix1.style.flex = "1";
    choix3.style.flex = "1";
    choix4.style.flex = "1";
    for(var i = 0; i < h1Elements.length; i++) {
        if(i!=1) {
            retireMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='hidden';
            discoveryCardElements[i].style.visibility='hidden';
        } else {

            afficheMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='visible';
            discoveryCardElements[i].style.visibility='visible';
        }
    }
}) 

choix3.addEventListener('click', (e) => {
    choix3.style.flex = "8";
    choix2.style.flex = "1";
    choix1.style.flex = "1";
    choix4.style.flex = "1";
    for(var i = 0; i < h1Elements.length; i++) {
        if(i!=2) {
            retireMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='hidden';
            discoveryCardElements[i].style.visibility='hidden';
        } else {
            afficheMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='visible';
            discoveryCardElements[i].style.visibility='visible';
        }
    }

    
}) 

choix4.addEventListener('click', (e) => {
    choix4.style.flex = "8";
    choix2.style.flex = "1";
    choix3.style.flex = "1";
    choix1.style.flex = "1";
    for(var i = 0; i < h1Elements.length; i++) {
        if(i!=3) {
            retireMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='hidden';
            discoveryCardElements[i].style.visibility='hidden';
        } else {
            afficheMenuH1(h1Elements[i]);
            h2Elements[i].style.visibility='visible';
            discoveryCardElements[i].style.visibility='visible';
        }
    }

    
}) 


function retireMenuH1(choix){
    choix.style.fontSize = "2vmax";
    if (window.matchMedia("(min-width: 1250px)").matches) {
        choix.style.writingMode = "vertical-rl";
        choix.style.left = "40%";
    }
    choix.style.top = "40%";
    
}

function afficheMenuH1(choix){
    choix.style.fontSize = "4vmax";
    choix.style.writingMode = "horizontal-tb";
    choix.style.top = "7%";
    choix.style.left = "5%";
}