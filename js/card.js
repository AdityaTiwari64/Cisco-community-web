// const swiper = new Swiper('.slider-wrapper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     breakpoints:{
//         0:{
//             slidesPerView:1
//         },
//         620:{
//             slidesPerView:2
//         },
//         1024:{
//             slidesPerView:3
//         }

//     }
//   });

var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabcursor: true,
    initialSlide: 4,
    speed: 500,
    rotate: true,
    // autoplay: {
    //     delay: 1000,
    // },
    mousewheel: {
        invert: false,
    }
})

function callFunction(){
    console.log("Hello World")
    // slides = document.getElementsByClassName("dislay-non")
    const slides = document.getElementsByClassName("slides")
    for (let i = 0; i < slides.length; i++) {
        // Access each div element using divs[i]
        slides[i].classList.toggle("opactive"); 
      }

}