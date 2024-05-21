const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      }
  });