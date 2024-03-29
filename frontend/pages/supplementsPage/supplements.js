import { handleLogOut } from "../logOut/handleLogOut.js";
import { checkUser } from "../../getUser.js";

checkUser(); //Checking if user is loged in or not

const sizeSelectElement = document.querySelector("#type-select");
// const priceSelectElement = document.querySelector("#price-select");
const genderSelectElement = document.querySelector("#gender-select");
const selectedPriceFrom = document.getElementById("price-from");
const selectedPriceTo = document.getElementById("price-to");

const handleFiltering = () => {
  const selectedType = sizeSelectElement.value;
  const selectedWeight = genderSelectElement.value;
  const priceFrom = selectedPriceFrom.value;
  const priceTo = selectedPriceTo.value;

  fetch("../../../backend/api/supplements_controller.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `selectedType=${selectedType}&priceFrom=${priceFrom}&priceTo=${priceTo}&selectedWeight=${selectedWeight}`,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the returned data from the PHP API

      if (!data.message) {
        console.log(data);
        const productContianer = document.getElementById("product-container");
        productContianer.innerHTML = ""; // Clear the product container

        data.forEach((prod) => {
          const product = document.createElement("div");
          product.classList.add("product");
          product.addEventListener("click", () => {
            location.href =
              "../singleProductPage/singleProduct.html?id=" +
              prod.supplement_id +
              "&name=supplement";
          });

          const image = document.createElement("img");
          image.src = prod.supplement_image;

          const name = document.createElement("h3");
          name.textContent = "Name: " + prod.supplement_name;

          const price = document.createElement("p");
          price.textContent = "Price: " + prod.supplement_price + "$";

          const neto = document.createElement("p");
          neto.textContent = "Size: " + prod.supplement_weight;

          // const link = document.createElement("a");
          // link.href = "../singleProductPage/singleProduct.html"

          productContianer.appendChild(product);
          product.appendChild(image);
          product.appendChild(name);
          product.appendChild(price);
          product.appendChild(neto);
        });
      } else {
        alert("Filtered products are not found");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
handleFiltering();
sizeSelectElement.addEventListener("change", handleFiltering);
// priceSelectElement.addEventListener("change", handleFiltering);
genderSelectElement.addEventListener("change", handleFiltering);
document
  .getElementById("submit-filters")
  .addEventListener("click", handleFiltering);

const lgnButton = document.getElementById("log-out");
handleLogOut(lgnButton);
