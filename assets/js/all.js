"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); //adobe font Source Han Sans

(function (d) {
  var config = {
    kitId: 'ngn0vic',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);

    try {
      Typekit.load(config);
    } catch (e) {}
  };

  s.parentNode.insertBefore(tk, s);
})(document); //swiper
//only auto play


var swiperAutoPlay = new Swiper(".swiper-auto-play", {
  spaceBetween: 30,
  slidesPerView: 4.5,
  //一次顯示數量
  slidesPerGroup: 2,
  //滑動數量
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    //由pc 轉為 mobile
    992: {
      slidesPerView: 3,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //change + per column + row per group  //need to replace cdn to
//<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css">
//<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js"></script>

var swiperPerColumn = new Swiper(".swiper-per-column", {
  slidesPerView: 2.5,
  //一次顯示數量
  slidesPerGroup: 1,
  //滑動數量
  slidesPerColumn: 2,
  //一欄顯示多少行內容
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    992: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      slidesPerColumn: 2
    },
    768: {
      slidesPerGroup: 3,
      slidesPerView: 1,
      slidesPerColumn: 3
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //swiper vertical to horisonal

var swiperAutoPlay = new Swiper(".swiper-test", {
  spaceBetween: 30,
  slidesPerView: 3,
  //一次顯示數量
  slidesPerGroup: 1,
  //滑動數量
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  breakpoints: {
    //由pc 轉為 mobile
    992: {
      slidesPerView: 2.1 //一次顯示數量 

    },
    768: {
      slidesPerView: 1 //一次顯示數量

    }
  },
  direction: getDirection(),
  on: {
    resize: function resize() {
      swiper.changeDirection(getDirection());
    }
  }
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 767 ? 'vertical' : 'horizontal';
  return direction;
}
//# sourceMappingURL=all.js.map
