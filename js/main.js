document.addEventListener('DOMContentLoaded', function () {
    sliderHome()
});


function handleCloseMenuMovil() {
    document.getElementById("menuAdmin__movil").style.width = "0%";
}

function handleViewMenuMovil() {
    document.getElementById("menuAdmin__movil").style.width = "100%";
}


function sliderHome() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
        }
      });
}
