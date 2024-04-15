const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
    },
});



$('.testi.owl-carousel').owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    lazyLoad: true,
    dots: false,
    nav: true,
    navText: [
      "<img src='./asset/test-left-arrow.svg' alt='Previous'>",
      "<img src='./asset/text-right-arrow.svg' alt='Next'>"
    ],
    autoPlay: true,
    autoPlayTimeout: 3000,
    responsive:{
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      1000:{
        items: 3,
      }
    }
});
