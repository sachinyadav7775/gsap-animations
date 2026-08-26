// gsap.to(".box1", {
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"lightgrey",
//     borderRadius:"50%",
//     repeat:-1,
//     yoyo:true
// })

// gsap.from(".box2", {
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"lightgreen",
//     borderRadius:"50%",
//     // scale:0.6
//     repeat:-1,
//     yoyo:true
// })

// gsap.to ("h1", {
//     color:"yellow",
//     y:30,
//     opacity:0,
//     duration:2,
//     delay:1
// })

// gsap.from ("h1", {
//     y:30,
//     opacity:0,
//     duration:2,
//     delay:1,
//     stagger:0.5
// })

// gsap.to(".box1", {
//     x:1000,
//     duration:1.5,
//     delay:1,
//     backgroundColor:"red",
// })

// gsap.to(".box2", {
//     x:1100,
//     duration:1.5,
//     delay:2.5,
//     backgroundColor:"blue",
// })

// gsap.to(".box3", {
//     x:1200,
//     duration:1.5,
//     delay:4,
//     backgroundColor:"lightgreen",
// })

let tl = gsap.timeline()

// tl.to(".box1", {
//     x:1200,
//     duration:1.5, 
//     delay:1
// })

// tl.to(".box2", {
//     x:1200,
//     duration:1.5, 
//     delay:1
// })

// tl.to(".box3", {
//     x:1200,
//     duration:1.5, 
//     delay:1
// })

tl.from("h1", {
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h3", {
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.4
})

tl.from("h2", {
    y:20,
    opacity:0,
    duration:1,
    scale:0.1
})