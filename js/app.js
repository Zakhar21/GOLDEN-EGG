const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
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

