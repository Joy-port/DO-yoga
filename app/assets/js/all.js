$(function() {
  console.log('Hello Bootstrap5');
});

//adobe font Source Han Sans
(function(d) {
  var config = {
    kitId: 'ngn0vic',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

//swiper
//only auto play
var swiper = new Swiper(".swiper-auto-play", {
  spaceBetween: 30,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4.5,

    },
  },

});

//change + per column + row per group  //need to replace cdn to
//<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css">
//<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js"></script>

var swiper = new Swiper(".swiper-per-column", {
  slidesPerView: 2.5,  //一次顯示數量
  slidesPerGroup: 2,   //滑動數量
  slidesPerColumn: 2,  
  spaceBetween: 30,

  breakpoints: {
    992: {
      slidesPerGroup: 2, 
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row'
      
    },
    768: {
      slidesPerGroup: 3,
      slidesPerView: 1,
      slidesPerColumn: 3,
      slidesPerColumnFill: 'row'
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});