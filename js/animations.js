gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger
const sectionCounter = gsap.timeline({
    scrollTrigger: {
        trigger: '.counters',
        start: "top center",
        markers: false,
        toggleActions: 'play none none none'  //play pause resume reverse restart reset none
    }
})

const counters = document.querySelectorAll(".countersData");

sectionCounter.to('.counters__counterSection', {
    opacity: 1,
    duration: 1,
});

sectionCounter.from(counters, {
    textContent: 0,
    duration: 3,
    ease: Power1.easeIn,
    snap: { textContent: 1 }
});