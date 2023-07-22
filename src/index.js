new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        // clickable: true,
        // dynamicBullets: true,

        // renderBullet: function (index, className){
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
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
});

