const tl = gsap.timeline({paused: true});
console.log(tl)

const animateOpenNav = () => {
    tl.to(".nav-container", 0.2, {
        autoAlpha: 1,
        delay: 0.1,
    });

    tl.to(
        ".site-logo",
        0.2,
        {
            color: "#fff",
        },
        "-=0.1"
    );
};

tl.from(".flex > div", 0.4, {
    opacity: 0,
    y: 10,
    stagger: {
        amount: 0.04,
    },
});

tl.to(".nav-link > a",0.8, {
    top: 0,
    ease: "power2.inOut",
    stagger: {
        amount: 0.1
    }
}, "-=0.4");

tl.from(".nav-footer", 0.3, {
    opacity: 0
}, "-=0.5").reverse();


const openNav = () => {
    animateOpenNav();
    const navBtn = document.getElementsByClassName("menu-toggle-btn")[0];
    const element = document.querySelector(".menu-toggle-btn");
    element.style.setProperty("--check-primary", "#000")
    console.log(navBtn)
    navBtn.onclick = function(e){
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
        element.style.setProperty("--check-primary", "#fff")
        console.log("test")
    };
};

openNav();