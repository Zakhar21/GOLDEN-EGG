const swiper = new Swiper('.spec__swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
});
const swiperMenu = new Swiper('.menu__slider', {
  // Optional parameters
  slidesPerView:2,
  grid: {
    rows: 2,
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

});



let tabs = document.querySelector('.tabs');
let menuSlider = document.querySelectorAll('.menu__slider-block');

tabs.addEventListener('click', function (e) {
  if(e.target.classList.contains('tabs__item')) {
    this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
  }

  menuSlider.forEach(slider => slider.classList.remove('show'));

  let tabIndex = e.target.dataset.tab;
  let thisSwiper = document.querySelector(tabIndex);
  thisSwiper.classList.add('show');
});



window.addEventListener('load', overflowInnerTabs);
window.addEventListener('resize', overflowInnerTabs);

function overflowInnerTabs(){
  let outerTabs = document.querySelector('.tabs__container');
  let innerTabs = document.querySelector('.tabs');

  if(innerTabs.offsetWidth > outerTabs.offsetWidth){
    innerTabs.classList.add('overflow');
  }else{
    innerTabs.classList.remove('overflow');
  }
}

let burger = document.querySelector('.hamburger');
let menuList = document.querySelector('.top-menu__list');
let animateburger = document.querySelector('.hamburger--squeeze');


burger.addEventListener('click', () => {
  menuList.classList.toggle('is-active');
  animateburger.classList.toggle('is-active');
  
});

// Закрывать меню при скролле
let sizeOver = 100;
window.addEventListener('scroll', () => {
  if(window.scrollY > sizeOver){
    menuList.classList.remove('is-active');
    animateburger.classList.remove('is-active');
  }
});