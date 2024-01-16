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
          carsList.appendChild(car_detailes);
        });
      });
    document.querySelector("#back_to_cars").addEventListener("click", () => {
      let carsList = document.querySelector("#carlist-section");
      carsList.firstElementChild.classList.remove("d-none");
      document.querySelector("#car-details-section").remove();
    });
    carList.appendChild(carElmentDiv);
  }
}
addCarsCards();
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
