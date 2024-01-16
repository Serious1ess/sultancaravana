AOS.init({
  duration: 800,
  easing: "slide",
});

(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  var carousel = function () {
    $(".carousel-car").owlCarousel({
      center: true,
      loop: true,
      autoplay: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    $(".carousel-testimony").owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // navigation
  var OnePageNav = function () {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
      "click",
      function (e) {
        e.preventDefault();

        var hash = this.hash,
          navToggler = $(".navbar-toggler");
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          700,
          "easeInOutExpo",
          function () {
            window.location.hash = hash;
          }
        );

        if (navToggler.is(":visible")) {
          navToggler.click();
        }
      }
    );
    $("body").on("activate.bs.scrollspy", function () {
      console.log("nice");
    });
  };
  OnePageNav();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $("#book_pick_date,#book_off_date").datepicker({
    format: "m/d/yyyy",
    autoclose: true,
  });
  $("#time_pick").timepicker();
})(jQuery);
$caravans = {
  caravan1: {
    name: "GOLDEN GRAND",
    price: "$15,500",
    img: "images/caravans/caravan1/IMG-20240101-WA0008.jpg",
    capacity: "4",
    dimensions: {
      length: "3.90m",
      width: "2.25 M",
      height: "2M",
    },
    water_tanks: {
      clean_water: "100 L",
      bathroom_water: "40 L",
    },
    features: [
      "نافذة بانورامية",
      "نظام تدفئة فيباصطو",
      "شاشة تلفاز أندرويد",
      "ثلاجة 90 لتر",
      "كفالة لمدة سنتين",
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت التكلفة الاضافية حسب طلبكم",
      },
      custom_color: true,
    },
  },
  caravan2: {
    name: "TIGER",
    price: "$4200",
    capacity: "2 أشخاص",
    img: "images/caravans/caravan2/IMG-20240103-WA0009.jpg",
    dimensions: {
      length: "2.40 m",
      width: "2 m",
      height: "2 m",
      wight: "450 kg",
    },
    water_tanks: {
      clean_water: "100 لتر",
      bathroom_water: "40 لتر",
    },
    features: [
      "نافذة بانورامية",
      "نظام تدفئة",
      "شاشة تلفاز أندرويد",
      "ثلاجة 90 لتر",
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت التكلفة الاضافية حسب طلبكم",
      },
      custom_color: true,
    },
  },
  caravan3: {
    name: "SULTAN",
    price: "$5200",
    capacity: "2 أشخاص",
    img: "images/caravans/caravan3/IMG-20240103-WA0022.jpg",
    dimensions: {
      length: "3.90m",
      width: "2m",
      height: "2m",
      wight: "750 kg",
    },
    water_tanks: {
      clean_water: "100 L",
      bathroom_water: "40 L",
    },
    features: [
      "خزان ماء نظيف 100 لتر",
      "نظام تدفئة",
      "شاشة تلفاز أندرويد",
      "ثلاجة  تتسع ل 90 ليتر",
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت التكلفة الاضافية حسب طلبكم",
      },
      custom_color: true,
    },
  },
  caravan4: {
    name: "MONESTER",
    price: "$6200",
    capacity: "4 أشخاص",
    img: "images/caravans/caravan4/IMG-20240103-WA0031.jpg",
    dimensions: {
      length: "2.25 متر",
      width: "2.25 متر",
      height: "2 متر",
    },
    water_tanks: {
      clean_water: "100 لتر",
      bathroom_water: "90 لتر",
    },
    features: [
      "نافذة بانورامية",
      "نظام تدفئة",
      "شاشة تلفاز أندرويد",
      "فرن غاز له  رأسين",
      "مغسلة يد اضافية في الحمام",
      "بلور بانورامي كامل",
      "خشب الاثاث بوزن خفيف وجودة أعلى",
      "للمزيد من التفاصيل انقر على الفيديو التفصيلي لمشاعدة الكرافان بشكل كامل",
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت التكلفة الاضافية حسب طلبكم",
      },
      custom_color: true,
    },
  },
  caravan5: {
    name: "POWER",
    price: "$11600",
    capacity: "5 أشخاص",
    img: "images/caravans/caravan3/IMG-20240103-WA0022.jpg",
    dimensions: {
      length: "3.90m",
      width: "2m",
      height: "2m",
      wight: "750 kg",
    },
    water_tanks: {
      clean_water: "100 L",
      bathroom_water: "40 L",
    },
    features: [
      "خزان ماء نظيف 100 لتر",
      "نظام تدفئة",
      "ثلاجة  تتسع ل 90 ليتر",
      "طلاء خارجي للوحة CIP من GOFRAJLIXPS",
      "نوافذ مفتوحة أمامية وجانبية",
      "طلاء خارجي للوحة CIP من GOFRAJLIXPS",
      "نوافذ مفتوحة أمامية وجانبية",
      "لوحة تحكم ذات 8 أزرار",
      "تركيب داخلي 12 فولت",
      "مقبس توصيل السيارة ذو 7 دبابيس",
      "تجميع إيقاف LED",
      "LED و USB ومآخذ 220 فولت",
      "ثلاجة 220 فولت",
      "حوض",
      "طباخ الغاز",
      "دش خارجي",
      "مرحاض متنقل سعة 20 لتر",
      "خزانة حمام خلاط باربر",
      "خزان مياه سعة 100 لتر",
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت التكلفة الاضافية حسب طلبكم",
      },
      custom_color: true,
    },
  },
};
$selectedCaravan = 0;
