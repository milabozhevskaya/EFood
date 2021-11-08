const reviewsSwiper = new Swiper('.reviews__slider', {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
});

let categoriesSwiper = new Swiper('.category', {
  observer: true,
  observeParents: true,
  slidesPerView: 5,
  spaceBetween: 24,
  loop: true,
  direction: document.documentElement.clientWidth < 576 ? 'vertical' : 'horizontal',
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});

window.addEventListener('resize', () => {
  categoriesSwiper = new Swiper('.category', {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    spaceBetween: 24,
    loop: true,
    direction: document.documentElement.clientWidth < 576 ? 'vertical' : 'horizontal',
    navigation: {
      nextEl: '.pagination__next',
      prevEl: '.pagination__prev',
    },
    pagination: {
      el: '.swiper-pagination',
      // type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 5,
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
  });
});
