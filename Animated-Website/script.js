function page1Animation() {

    let tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -40,
        opacity: 0,
        duration: 0.6,
        delay: 1,
        stagger: 0.15
    });

    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.7
    });

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.5
    });

    tl.from(".center-part1 button", {
        y: 30,
        opacity: 0,
        duration: 0.6
    });

    tl.from(".center-part2 img", {
        x: 100,
        opacity: 0,
        duration: 0.8
    }, "-=0.3");

    tl.from(".section1bottom img", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    });
}

page1Animation();

function page2Animation () {
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top -50",
            scrub:2
        }
    })

    tl2.from(".services", {
        y:30,
        opacity:0,
        duration:0.5
    })

    tl2.from(".elem.elem1.left", {
        x:-300,
        opacity:0,
        duration:0.5
    }, "sky")

    tl2.from(".elem.elem2.right", {
        x:300,
        opacity:0,
        duration:0.5
    }, "sky")

    tl2.from(".elem.elem3.left", {
        x:-300,
        opacity:0,
        duration:0.5
    }, "sk")

    tl2.from(".elem.elem4.right", {
        x:300,
        opacity:0,
        duration:0.5
    },"sk")
}

page2Animation()