var isMobile =
  /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

if (isMobile) {
  // It's a mobile device
  console.log("Mobile device");
} else {
  // It's a desktop device
  console.log("Desktop device");
}
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
function addCarsCards() {
  let carList = document.querySelector(".carousel-car");
  for (let carvan in $caravans) {
    let carElmentDiv = document.createElement("div");
    if (isMobile) {
      carElmentDiv.style = "width:100%;height:100%";
    }
    carElmentDiv.classList.add("item");
    carElmentDiv.innerHTML = `
    <div class="car-wrap rounded ftco-animate">
    <div class="img rounded d-flex align-items-end" style="background-image: url(${$caravans[carvan].img})"></div>
    <div class="text">
      <h2 class="mb-0">
        <a href="car-single.html">${$caravans[carvan].name}</a>
      </h2>
      <div class="d-flex mb-3">
        <span class="cat">${$caravans[carvan].capacity}</span>
        <p class="price ml-auto">${$caravans[carvan].price} </p>
      </div>
      <p class="d-flex mb-0 d-block">
        
        <a class="btn btn-secondary py-2 ml-1 more_detailes" href="car-single.html" style="width:100%" caravan-id=${carvan} class="btn btn-secondary py-2 ml-1">التفاصيل</a>
      </p>
    </div>
    </div>
  `;
    carElmentDiv
      .querySelector(".more_detailes")
      .addEventListener("click", (e) => {
        $selectedCaravan = e.currentTarget.getAttribute("caravan-id");
        // readHtmlFile((element) => {
        //   let ditCar = element;
        //   document.appendChild(ditCar);
        // });
      });
    carList.appendChild(carElmentDiv);
  }
}
addCarsCards();
