$caravans = {
  caravan1: {
    price: "$15,500",
    capacity: "6 أشخاص",
    dimensions: {
      length: "5.25 متر",
      width: "2.25 متر",
      height: "2 متر",
    },
    water_tanks: {
      clean_water: "100 لتر",
      bathroom_water: "40 لتر",
    },
    features: [
      "نافذة بانورامية",
      "نظام تدفئة فيباصطو",
      "شاشة تلفاز أندرويد",
      "ثلاجة 90 لتر",
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت",
      },
      custom_color: true,
    },
  },
  caravan2: {
    price: "$5,500",
    capacity: "2 أشخاص",
    dimensions: {
      length: "2.25 متر",
      width: "2.25 متر",
      height: "2 متر",
    },
    water_tanks: {
      clean_water: "100 لتر",
      bathroom_water: "40 لتر",
    },
    features: [
      "نافذة بانورامية",
      "نظام تدفئة فيباصطو",
      "شاشة تلفاز أندرويد",
      "ثلاجة 90 لتر",
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت",
      },
      custom_color: true,
    },
  },
};
function addCarsCards() {
  for (let carvan in $caravans) {
    let carElmentDiv = document.createElement("div");
    let carList = document.querySelector(".carvans_list");
    carElmentDiv.innerHTML = `<div class="col-md-4">
        <div class="car-wrap rounded ftco-animate fadeInUp ftco-animated">
          <div class="img rounded d-flex align-items-end" style="background-image: url(images/car-1.jpg)"></div>
          <div class="text">
            <h2 class="mb-0">
              <a href="car-single.html">${carvan}</a>
            </h2>
            <div class="d-flex mb-3">
              <span class="cat">Cheverolet</span>
              <p class="price ml-auto">$500 <span>/day</span></p>
            </div>
            <p class="d-flex mb-0 d-block">
              <a href="#" class="btn btn-primary py-2 mr-1">Book now</a>
              <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
            </p>
          </div>
        </div>
        </div>`;
    carList.appendChild(carElmentDiv);
  }
}
