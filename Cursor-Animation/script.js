let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imgDiv = document.querySelector("#image")

main.addEventListener("mousemove" , function(dets) {
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:0.6,
        // ease:"back.out(1.7)"
    })

})

imgDiv.addEventListener("mousemove", function(){
    cursor.innerHTML= "View More"
    gsap.to(cursor, {
        scale:3,
        backgroundColor: "#ffffff9a"
    })
})

imgDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML= ""
    gsap.to(cursor, {
        scale:1,
        backgroundColor:"#fff"
    })
})