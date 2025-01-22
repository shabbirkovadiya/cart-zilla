var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  var pslider = new Swiper(".p-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    autoplay: {
      delay: 2000, // 2 seconds delay between slides
      disableOnInteraction: false, // Continue autoplay after interactions
    },
    breakpoints: {
      320: {
        slidesPerView: 2, // 1 slide visible for small screens
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3, // 1 slide visible for small screens
        spaceBetween: 10,
      },
   
      992: {
        slidesPerView: 4, // 3 slides visible for desktops
        spaceBetween: 20,
      },
    },
  });