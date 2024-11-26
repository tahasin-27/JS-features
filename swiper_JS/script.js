var swiper = new Swiper(".swiper", {
//for navigation slider next & previous button
    // navigation: {
    // for custom next & previous button
        // nextEl: ".next",
        // prevEl: ".prev"

    // for swiper JS build in class
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
    // }


//for pagination slider next & previous button
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    loop: true,
    autoplay: true,
})