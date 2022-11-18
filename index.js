//SCROLL UP//
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Initiate the wowjs
new WOW().init();

// SWIPER
let swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 25,
    },
})

//GSAP ANIMATION//
var tl = gsap.timeline();
tl.from(".font-monospace", 1, {
    y: 200,
    stagger: 0.2,
    opacity: 0,
});
