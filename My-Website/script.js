function sectionFirstAnimation() {
    function breakTheText() {
        const h1 = document.querySelector(".nav-icon h1");
        const text = h1.textContent.trim();

        const half = Math.floor(text.length / 2);

        let clutter = "";

        text.split("").forEach((char, index) => {
            const cls = index < half ? "a" : "b";
            clutter += `<span class="${cls}">${char}</span>`;
        });

        h1.innerHTML = clutter;
    }

    breakTheText();

    const tl = gsap.timeline();

    tl.from(".nav-icon h1 .a", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        delay:0.4,
        stagger: 0.15,
        ease: "power3.out"
    });

    tl.from(".nav-icon h1 .b", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        delay:0.4,
        stagger: -0.15,
        ease: "power3.out"
    }, "<");

    gsap.from(".nav-icon i", {
        opacity:0,
        duration:1,
        // delay:0.2
    },"k")

    gsap.from(".menu-icon",{
        opacity:0,
        duration:1,
        // delay:0.2
    }, "k")
}

function sectionSecondAnimation() {
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section-second .card-information",
            scroller:"body",
            start:"top 50%",
            end:"buttom -50%",
        }
    })

    tl2.from(".information-text1", {
        x:-1000,
        duration:2,
        delay:0.5
    },"sk")

    tl2.from(".information-text2", {
        y:100,
        opacity:0,
        duration:2,
        delay:0.6,
    },"sk")

    tl2.from(".information-text3", {
        x:1000,
        duration:2,
        delay:0.5
    },"sk")
    
}

function sectionThirdAnimation() {
    let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section-third",
            scroller:"body",
            start:"top 50%",
            end:"top -50",
        }
    }) 
    
    gsap.to(".box-img img", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    tl3.from(".box-img img", {
        opacity:0,
        scale: 1.15,
        filter: "blur(15px)",
        duration: 1.5,
        ease: "power3.out"
    })

    tl3.from(".small-card", {
        y:70,
        opacity:0,
        duration:1,
        scale: 0.7,
        rotation: -5,
        ease: "back.out(1.7)"
    }, "s")
    
    tl3.from(".first-text, .second-text, .third-text", {
        y:100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out"
    }, "-=0.15")

}

sectionFirstAnimation()
sectionSecondAnimation()
sectionThirdAnimation()