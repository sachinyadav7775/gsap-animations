// function page1Animation() {

//     let tl = gsap.timeline();

//     tl.from("nav h1, nav h4, nav button", {
//         y: -40,
//         opacity: 0,
//         duration: 0.6,
//         delay: 1,
//         stagger: 0.15
//     })

//     tl.from(".center-part1 h1", {
//         x: -300,
//         opacity: 0,
//         duration: 0.7
//     })

//     tl.from(".center-part1 p", {
//         x: -100,
//         opacity: 0,
//         duration: 0.5
//     })

//     tl.from(".center-part1 button", {
//         y: 30,
//         opacity: 0,
//         duration: 0.6
//     })

//     tl.from(".center-part2 img", {
//         x: 100,
//         opacity: 0,
//         duration: 0.8
//     }, "-=0.3")

//     tl.from(".section1bottom img", {
//         y: 30,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.2
//     })
// }

// function page2Animation () {

//     let tl2 = gsap.timeline({
//         scrollTrigger:{
//             trigger:".section2",
//             scroller:"body",
//             start:"top 50%",
//             end:"top -50",
//             // scrub:1
//         }
//     })

//     tl2.from(".services", {
//         y:30,
//         opacity:0,
//         duration:0.5
//     })

//     tl2.from(".elem.elem1.left", {
//         x:-300,
//         opacity:0,
//         duration:0.5
//     }, "sky")

//     tl2.from(".elem.elem2.right", {
//         x:300,
//         opacity:0,
//         duration:0.5
//     }, "sky")

//     tl2.from(".elem.elem3.left", {
//         x:-300,
//         opacity:0,
//         duration:0.5
//     }, "sk")

//     tl2.from(".elem.elem4.right", {
//         x:300,
//         opacity:0,
//         duration:0.5
//     },"sk")
// }

// function page3Animation () {
//     let tl3 = gsap.timeline({
//         scrollTrigger:{
//             trigger:".section3",
//             scroller:"body",
//             start:"top 50%",
//             end:"top -50",
//             // scrub:1
//         }
//     })

//     tl3.from(".text-element", {
//         y:30,
//         opacity:0,
//         duration:0.5
//     })

//     tl3.from(".casestudy", {
//         x:-300,
//         opacity:0,
//         duration:0.8
//     })

//     tl3.from(".box", {
//         x:1000,
//         opacity:0,
//         duration:1
//     })

//     tl3.from(".footer", {
//         opacity:0,
//         duration:0.5
//     })

// }

// page3Animation()
// page1Animation()
// page2Animation()  


function page1Animation() {

    let tl = gsap.timeline();

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {

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

    });


    mm.add("(max-width: 768px)", () => {

        tl.from("nav h1, nav h4, nav button", {
            y: -20,
            opacity: 0,
            duration: 0.3,
            delay: 0.3,
            stagger: 0.08
        });

        tl.from(".center-part1 h1", {
            x: -80,
            opacity: 0,
            duration: 0.4
        });

        tl.from(".center-part1 p", {
            x: -50,
            opacity: 0,
            duration: 0.3
        });

        tl.from(".center-part1 button", {
            y: 20,
            opacity: 0,
            duration: 0.3
        });

        tl.from(".center-part2 img", {
            x: 50,
            opacity: 0,
            duration: 0.4
        }, "-=0.15");

        tl.from(".section1bottom img", {
            y: 20,
            opacity: 0,
            duration: 0.3,
            stagger: 0.08
        });

    });
}


function page2Animation() {

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                scroller: "body",
                start: "top 50%",
                end: "top -50%",
            }
        });

        tl2.from(".services", {
            y: 30,
            opacity: 0,
            duration: 0.5
        });

        tl2.from(".elem.elem1.left", {
            x: -300,
            opacity: 0,
            duration: 0.5
        }, "sky");

        tl2.from(".elem.elem2.right", {
            x: 300,
            opacity: 0,
            duration: 0.5
        }, "sky");

        tl2.from(".elem.elem3.left", {
            x: -300,
            opacity: 0,
            duration: 0.5
        }, "sk");

        tl2.from(".elem.elem4.right", {
            x: 300,
            opacity: 0,
            duration: 0.5
        }, "sk");

    });


    mm.add("(max-width: 768px)", () => {

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                scroller: "body",
                start: "top 75%",
                end: "top 30%",
            }
        });

        tl2.from(".services", {
            y: 20,
            opacity: 0,
            duration: 0.3
        });

        tl2.from(".elem.elem1.left", {
            x: -80,
            opacity: 0,
            duration: 0.3
        }, "sky");

        tl2.from(".elem.elem2.right", {
            x: 80,
            opacity: 0,
            duration: 0.3
        }, "sky");

        tl2.from(".elem.elem3.left", {
            x: -80,
            opacity: 0,
            duration: 0.3
        }, "sk");

        tl2.from(".elem.elem4.right", {
            x: 80,
            opacity: 0,
            duration: 0.3
        }, "sk");

    });
}


function page3Animation() {

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3",
                scroller: "body",
                start: "top 50%",
                end: "top -50%",
            }
        });

        tl3.from(".text-element", {
            y: 30,
            opacity: 0,
            duration: 0.5
        });

        tl3.from(".casestudy", {
            x: -300,
            opacity: 0,
            duration: 0.8
        });

        tl3.from(".box", {
            x: 1000,
            opacity: 0,
            duration: 1
        });

        tl3.from(".footer", {
            opacity: 0,
            duration: 0.5
        });

    });


    mm.add("(max-width: 768px)", () => {

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3",
                scroller: "body",
                start: "top 75%",
                end: "top 30%",
            }
        });

        tl3.from(".text-element", {
            y: 20,
            opacity: 0,
            duration: 0.3
        });

        tl3.from(".casestudy", {
            x: -80,
            opacity: 0,
            duration: 0.4
        });

        tl3.from(".box", {
            x: 100,
            opacity: 0,
            duration: 0.5
        });

        tl3.from(".footer", {
            opacity: 0,
            duration: 0.3
        });

    });
}


// Run animations
page1Animation();
page2Animation();
page3Animation();