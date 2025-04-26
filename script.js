var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:"10",
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,

    })
    .to(".boundingelem",{
        y:"0",
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:0.2,
        delay:-1
    })
    .from(".footer",{
        y:"-10",
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1
    })
    
}


function cricleChaptaKro(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener('mousemove',(dets)=>{

        clearTimeout(timeout);

        xscale=gsap.utils.clamp(0.8,1.2,dets.clientX -xprev);
        yscale=gsap.utils.clamp(0.8,1.2,dets.clientY -yprev);

        xprev= dets.clientX;
        yprev= dets.clientY;

        circleMouseFollower(xscale,yscale);

        timeout =setTimeout(function(){
            document.querySelector('.minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)` ;
        },100);
        
    });
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",(dets)=>{
    document.querySelector('.minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}



cricleChaptaKro();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
    const img = elem.querySelector("img");

    elem.addEventListener("mouseenter", function (e) {
        let bounds = elem.getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top;

        gsap.set(img, {
            x: x - img.clientWidth / 2,
            y: y - img.clientHeight / 2
        });

        gsap.to(img, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power3.out"
        });
    });

    elem.addEventListener("mousemove", function (e) {
        let bounds = elem.getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top;

        gsap.to(img, {
            x: x - img.clientWidth / 2,
            y: y - img.clientHeight / 2,
            duration: 0.3,
            ease: "power3.out"
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(img, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power3.out"
        });
    });
});








