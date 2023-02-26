import { fatchHomePageData } from "http://localhost/fitness-ecommerce/Ecommerce-Fitness-Gear/frontend/pages/homePage/js/fatchHomePageData.js";
import { handleLogOut } from "../../logOut/handleLogOut.js";
const clothesContainer = document.getElementById("products-cont");
console.log(clothesContainer);

fatchHomePageData().then(([supp, clothes, equip]) => {
  console.log("SUPLEMENTI: ", supp);
  console.log("OPREMA: ", equip);
  console.log("ODECA: ", clothes);

  clothes.forEach((clot) => {
    const clotBox = document.createElement("div");
    clotBox.classList.add("product");

    const hover = document.createElement("div");
    hover.classList.add("product-hover");

    const clotImg = document.createElement("img");
    clotImg.src = clot.clothes_image;
    clotImg.alt = clot.clothes_name;

    const clotName = document.createElement("h3");
    clotName.textContent = clot.clothes_name;

    const clotPrice = document.createElement("p");
    clotPrice.textContent = clot.clothes_price;

    const viewMoreButton = document.createElement("a");
    viewMoreButton.href =
      "../../pages/singleProductPage/singleProduct.html?id=" +
      clot.clothes_id +
      "&name=clothes";
    viewMoreButton.textContent = "View More";

    clotBox.appendChild(clotImg);
    clotBox.appendChild(clotName);
    hover.appendChild(clotPrice);
    hover.appendChild(viewMoreButton);

    clotBox.appendChild(hover);
    clothesContainer.appendChild(clotBox);
  });

  equip.forEach((equip) => {
    const equipContainer = document.getElementById("equip-container");
    const equipBox = document.createElement("div");
    equipBox.classList.add("product");

    const hover = document.createElement("div");
    hover.classList.add("product-hover");

    const equipImg = document.createElement("img");
    equipImg.src = equip.equipment_image;
    equipImg.alt = equip.equipment_name;

    const equipName = document.createElement("h3");
    equipName.textContent = equip.equipment_name;

    const equipPrice = document.createElement("p");
    equipPrice.textContent = equip.equipment_price;

    const viewMoreButton = document.createElement("a");
    viewMoreButton.href =
      "../../pages/singleProductPage/singleProduct.html?id=" +
      equip.equipment_id +
      "&name=equipment";
    viewMoreButton.textContent = "View More";

    equipBox.appendChild(equipImg);
    equipBox.appendChild(equipName);
    hover.appendChild(equipPrice);
    hover.appendChild(viewMoreButton);

    equipBox.appendChild(hover);
    equipContainer.appendChild(equipBox);
  });

  supp.forEach((supp) => {
    const suppContainer = document.getElementById("supp-container");
    const suppBox = document.createElement("div");
    suppBox.classList.add("product");

    const hover = document.createElement("div");
    hover.classList.add("product-hover");

    const suppImg = document.createElement("img");
    suppImg.src = supp.supplement_image;
    suppImg.alt = supp.supplement_name;

    const suppName = document.createElement("h3");
    suppName.textContent = supp.supplement_name;

    const suppPrice = document.createElement("p");
    suppPrice.textContent = supp.supplement_price;

    const viewMoreButton = document.createElement("a");
    viewMoreButton.href =
      "../../pages/singleProductPage/singleProduct.html?id=" +
      supp.supplement_id +
      "&name=supplement";
    viewMoreButton.textContent = "View More";

    suppBox.appendChild(suppImg);
    suppBox.appendChild(suppName);
    hover.appendChild(suppPrice);
    hover.appendChild(viewMoreButton);

    suppBox.appendChild(hover);
    suppContainer.appendChild(suppBox);
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

window.plusSlides = plusSlides;
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-container")[0].children;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

//inesrting name of logined user
const userInfo = document.getElementById("header-user-name");
userInfo.innerHTML = `${user.ime}  ${user.prezime}`;

if (user.tip === "Kupac") {

  const myProducts = document.getElementById("prodavac");
  myProducts.innerHTML = "My Products";
  myProducts.href = "../../pages/vendorProducts/vendorProducts.html";

}

//handle logout btn
const lgnButton = document.getElementById("log-out");
handleLogOut(lgnButton);