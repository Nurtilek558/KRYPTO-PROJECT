const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next', // Кнопка "Вперёд"
      prevEl: '.swiper-button-prev', // Кнопка "Назад"
    },
    pagination: {
      
      clickable: true,
    },
  });

