$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();

    if (sct > 0) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }
  });
});

$(function () {
  const MAINVISUALSLIDE = new Swiper(".main_visual_slide", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },

    navigation: {
      nextEl: ".main_visual .arrows .next",
      prevEl: ".main_visual .arrows .prev",
    },
  });
});

$(function () {
  $(".main_content .brand_tab_menu button").on("click", function () {
    let idx = $(this).parent().index();
    $(".main_content .brand_tab_menu button").removeClass("on");
    $(this).addClass("on");
    $(".main_content .brand_tab_content .con").removeClass("on");
    $(".main_content .brand_tab_content .con").eq(idx).addClass("on");
  });
});
