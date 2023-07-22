new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'progressbar',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

    grabCursor: true,

    mousewheel: {
        eventsTarget: ".image-slider",
    },

    autoHeight: true,

    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 3,
});

