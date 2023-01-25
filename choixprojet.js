//gsap

const choix1 = document.getElementsByClassName('choix')[0];
const choix2 = document.getElementsByClassName('choix')[1];
const choix3 = document.getElementsByClassName('choix')[2];
const choix4 = document.getElementsByClassName('choix')[3];

const h1Elements = document.getElementsByTagName("h1");
const h2Elements = document.getElementsByTagName("h2");
const discoveryCardElements = document.getElementsByClassName("discover_card");
const menuElements= document.getElementsByClassName("menu");


choix1.addEventListener('click', (e) => {
    console.log('test');
    choix1.style.flex = "8";
    choix2.style.flex = "1";
    choix3.style.flex = "1";
    choix4.style.flex = "1";
    for(var i = 0; i < h1Elements.length; i++) {
        if(i!=0) {
            retireMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
        } else {
            afficheMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
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
            retireMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
        } else {
            afficheMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
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
            retireMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
        } else {
            afficheMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
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
            retireMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
        } else {
            afficheMenuH1(h1Elements[i], h2Elements[i], discoveryCardElements[i], menuElements[i]);
        }
    }

    
}) 


function retireMenuH1(titre1, titre2, discover_card, menu){
    titre1.style.fontSize = "2vmax";
    if (window.matchMedia("(min-width: 1250px)").matches) {
        titre1.style.writingMode = "vertical-rl";
        titre1.style.left = "40%";
    }
    titre1.style.top = "40%";

    titre2.style.opacity='0';
    
    discover_card.style.opacity='0';
    discover_card.style.visibility = "hidden";

    menu.style.visibility = 'hidden';
}

function afficheMenuH1(titre1, titre2, discover_card, menu){
    titre1.style.fontSize = "4vmax";
    titre1.style.writingMode = "horizontal-tb";
    titre1.style.top = "7%";
    titre1.style.left = "5%";

    titre2.style.opacity='1';
    
    discover_card.style.opacity='1';
    discover_card.style.visibility = "visible";

    menu.style.visibility = 'visible';
}