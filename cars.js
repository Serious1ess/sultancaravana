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

// function readHtmlFile() {
//   fetch("car-single.html")
//     .then((response) => response.text())
//     .then((html) => {
//       // Create a modal container
//       const modalContainer = document.createElement("div");
//       modalContainer.className = "modal";

//       // Create a close button for the modal
//       const closeButton = document.createElement("button");
//       closeButton.className = "close-button";
//       closeButton.innerHTML = "Close";
//       closeButton.addEventListener("click", () => {
//         modalContainer.style.display = "none";
//       });

//       // Create a content container for the modal
//       const modalContent = document.createElement("div");
//       modalContent.className = "modal-content";

//       // Create a temporary div to parse the HTML content
//       const tempDiv = document.createElement("div");
//       tempDiv.innerHTML = html;

//       // Extract the element with the specified class
//       const elementWithClass = tempDiv.querySelector(".ftco-car-details");

//       if (elementWithClass) {
//         // Append the element to the modal content container
//         modalContent.appendChild(elementWithClass);

//         // Append the close button to the modal content container
//         modalContent.appendChild(closeButton);

//         // Append the modal content container to the modal
//         modalContainer.appendChild(modalContent);

//         // Append the modal to the body
//         document.body.appendChild(modalContainer);

//         // Display the modal
//         modalContainer.style.display = "flex";

//         console.log("Element found and opened in a modal.");
//       } else {
//         console.log("Element with class not found.");
//       }
//     })
//     .catch((error) => console.error("Error fetching HTML file:", error));
// }
// function getData(callback) {
//   const jsonFilePath = `sultancaravana/carvanData.json`;

//   fetch(jsonFilePath)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((jsonData) => {
//       // Process the JSON data
//       callback(jsonData);
//     })
//     .catch((error) => {
//       console.error("Error fetching JSON file:", error);
//     });
// }

$caravans = {
  caravan1: {
    name: "GOLDEN GRAND",
    price: "$15,500",
    img: "images/caravans/caravan1/1.jpg",
    imageFolder: "caravan1",
    ImageType: "jpg",
    imageNumber: 5,
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
    discp: "تتفاوت التكلفة الاضافية حسب طلبكم",
  },
  caravan2: {
    name: "TIGER",
    price: "$4200",
    capacity: "2 أشخاص",
    img: "images/caravans/caravan2/1.jpg",
    imageFolder: "caravan2",
    ImageType: "jpg",
    imageNumber: 11,
    dimensions: {
      length: "2.40 m",
      width: "2 m",
      height: "2 m",
      weight: "450 kg",
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
    discp: "تتفاوت التكلفة الاضافية حسب طلبكم",
  },
  caravan3: {
    name: "SULTAN",
    price: "$5200",
    capacity: "2 أشخاص",
    img: "images/caravans/caravan3/1.jpg",
    imageFolder: "caravan3",
    imageNumber: 8,
    ImageType: "jpg",
    dimensions: {
      length: "3.90m",
      width: "2m",
      height: "2m",
      weight: "750 kg",
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
    discp: "تتفاوت التكلفة الاضافية حسب طلبكم",
  },
  caravan4: {
    name: "MONESTER",
    price: "$6200",
    capacity: "4 أشخاص",
    img: "images/caravans/caravan4/1.jpg",
    imageFolder: "caravan4",
    imageNumber: 4,
    ImageType: "jpg",
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
    ],
    solar_power_system: true,
    optional_additions: {
      air_conditioning: {
        available: true,
        additional_cost: "تتفاوت التكلفة الاضافية حسب طلبكم",
      },
      custom_color: true,
    },
    discp: "تتفاوت التكلفة الاضافية حسب طلبكم",
  },
  caravan5: {
    name: "POWER",
    price: "$11600",
    capacity: "5 أشخاص",
    img: "images/caravans/caravan5/1.jpeg",
    imageFolder: "caravan5",
    imageNumber: 23,
    ImageType: "jpeg",
    videosNum: 1,
    dimensions: {
      length: "3.90m",
      width: "2m",
      height: "2m",
      weight: "750 kg",
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
    discp: "تتفاوت التكلفة الاضافية حسب طلبكم",
  },
};
addCarsCards();

function addCarsCards() {
  let carList = document.querySelector(".carvans_list");
  carList.innerHTML = "";
  for (let carvan in $caravans) {
    let carElmentDiv = document.createElement("div");
    if (isMobile) {
      carElmentDiv.style = "width:100%;height:100%";
    }

    carElmentDiv.innerHTML = `<div style="    min-width: 300px;" class="col">
            <div class="car-wrap rounded ftco-animate fadeInUp ftco-animated">
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
                  
                  <a class="btn btn-secondary py-2 ml-1 more_detailes"  style="width:100%" caravan-id=${carvan} class="btn btn-secondary py-2 ml-1">التفاصيل</a>
                </p>
              </div>
            </div>
            </div>`;
    carElmentDiv
      .querySelector(".more_detailes")
      .addEventListener("click", (e) => {
        e.preventDefault();
        $selectedCaravan = e.currentTarget.getAttribute("caravan-id");
        let path = "car-single.html";
        let modalContent = readTextFile(path);
        extractBodyContentAsHTML(modalContent).then(function (html) {
          let carsList = document.querySelector("#carlist-section");
          carsList.firstElementChild.classList.add("d-none");
          let car_detailes = html.querySelector("#car-details-section");
          let imgPreContainer = car_detailes.querySelector(".carousel-inner");

          buildImagesPreview(imgPreContainer);
          buildCarvanInfo(car_detailes);
          carsList.appendChild(car_detailes);
        });
      });
    document.querySelector("#back_to_cars").addEventListener("click", () => {
      if (document.querySelector("#car-details-section")) {
        let carsList = document.querySelector("#carlist-section");
        carsList.firstElementChild.classList.remove("d-none");

        document.querySelector("#car-details-section").remove();
      }
    });
    carList.appendChild(carElmentDiv);
  }
}

function readTextFile(path) {
  path = getLink(path);

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", path, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return rawFile.responseText;
}
async function extractBodyContentAsHTML(html) {
  let promise = new Promise(function (resolve) {
    html = html.substring(
      html.indexOf(">", html.indexOf("<body")) + 1,
      html.indexOf("</body>")
    );
    let div = document.createElement("div");
    div.innerHTML = html;
    resolve(div);
  });
  return await promise;
}
function getLink(linkPath) {
  return linkPath;
}
function buildImagesPreview(container) {
  let caravan = $caravans[$selectedCaravan];
  let imgNum = caravan.imageNumber;
  let ImgType = caravan.ImageType;
  let vidNum = caravan.videosNum;
  for (let i = 1; i <= imgNum; i++) {
    let div = document.createElement("div");
    if (i == 1) div.classList.add("carousel-item", "active");
    else div.classList.add("carousel-item");
    let itemHtml = ` 
    <div
      class="img rounded"
      style="
        background-image: url(images/caravans/${$selectedCaravan}/${i}.${ImgType});
      "
    ></div>
  `;
    div.innerHTML = itemHtml;

    container.appendChild(div);
  }
  if (vidNum) {
    for (let i = 1; i <= vidNum; i++) {
      let div = document.createElement("div");
      div.classList.add("carousel-item");
      let itemHtml = `
   
      <video width="100%" height="600px" controls>
                      <source
                        src="images/caravans/${$selectedCaravan}/${i}.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
    `;
      div.innerHTML = itemHtml;
      container.appendChild(div);
    }
  }
}
function buildCarvanInfo(container) {
  let caravan = $caravans[$selectedCaravan];
  let carvName = container.querySelector(".caravan_name");
  let caravan_price = container.querySelector(".caravan_price");
  let caravan_length = container.querySelector(".caravan_length");
  let caravan_width = container.querySelector(".caravan_width");
  let caravan_capacity = container.querySelector(".caravan_capacity");
  let caravan_wight = container.querySelector(".caravan_wight");
  let caravan_height = container.querySelector(".caravan_height");

  carvName.innerText = caravan.name;
  caravan_price.innerText = caravan.price;
  caravan_length.innerText = caravan.dimensions.length;
  caravan_width.innerText = caravan.dimensions.width;
  caravan_capacity.innerText = caravan.capacity;
  caravan_wight.innerText = caravan.dimensions.weight || "";
  caravan_height.innerText = caravan.dimensions.height;
  let featuresContainer1 = container.querySelector(".features-list1");
  let featuresContainer2 = container.querySelector(".features-list2");
  let featuresContainer3 = container.querySelector(".features-list3");
  for (let feature of caravan.features) {
    let li = document.createElement("li");
    li.classList.add("check");
    let featureHTml = `
  <span class="ion-ios-checkmark"></span>${feature}
`;
    li.innerHTML = featureHTml;
    let index = caravan.features.indexOf(feature);
    if (index > 6 && index < 13) {
      featuresContainer2.appendChild(li);
    } else if (index > 13) {
      featuresContainer3.appendChild(li);
    } else featuresContainer1.appendChild(li);
  }

  let caravan_discp = container.querySelector(".caravan_discp");
  caravan_discp.innerText = caravan.discp;
}
