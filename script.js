// gsap.to(".nav",{
//     backgroundColor:"#000",
//     duration:0.5,
//     height:"110px",
//     scrollTrigger:{
//         trigger:".nav",
//         scroller:"body",
//         // markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:1
//     }
// })

gsap.to(".navbar",{
    backgroundColor : "#fcc21e",
    duration : 1,
    height:"10vh",
    position:"fixed",
    
    scrollTrigger :{
        trigger: ".navbar",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -6%",
        scrub:0
    }
})

gsap.to(".main",{
    backgroundColor:"white",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -30%",
        scrub:2
    }
})