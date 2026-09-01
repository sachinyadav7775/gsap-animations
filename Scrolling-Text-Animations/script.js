function marqueAnimation() {
    window.addEventListener("wheel", function(dets) {
        if(dets.deltaY > 0) {
            gsap.to(".marque", {
                transform:'translateX(-200%)',
                repeat:-1,
                duration:4,
                ease:"none"
            })

            gsap.to(".marque svg", {
                rotate:0
            })

        } else {
            gsap.to(".marque", {
                transform:'translateX(0%)',
                repeat:-1,
                duration:4,
                ease:"none"
            })
            
            gsap.to(".marque svg", {
                rotate:180
            })
        }
    })
}

marqueAnimation()