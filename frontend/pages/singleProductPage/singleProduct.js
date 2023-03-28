import { checkUser } from "../../getUser.js";
import { getUser } from "../../getUser.js";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const name = urlParams.get("name");
checkUser();
getUser().then((user) => {
  console.log(user);
  if (user.role === "Admin") {
    const infoCont = document.getElementById("info-container");
    const deleteBtn = document.createElement("button");
    deleteBtn.id = "delete-btn";
    deleteBtn.innerText = "Delete Product";
    infoCont.appendChild(deleteBtn);

    document.getElementById("delete-btn").addEventListener("click", () => {
      const product = JSON.parse(localStorage.getItem("productData"));
      console.log(product);
      const productType = product.name;

      fetch("../../../backend/api/deleteProduct_controller.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${name}&id=${id}`,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Product succesfully deleted");
          location.href = "../../../index.html";
        });
    });
  }
});

const fatchSingleProductData = () => {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "../../../backend/api/singleProductController.php?id=" +
        id +
        "&name=" +
        name,
      true
    );
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send();
  });
};

fatchSingleProductData()
  .then((response) => {
    console.log(response);
    // console.log(response.data);
    localStorage.setItem("productData", JSON.stringify(response));

    if (response.name === "clothes") {
      const productName = document.getElementById("productName");
      const price = document.getElementById("price");
      const desc = document.getElementById("desc");
      const img = document.getElementById("image");
      productName.textContent = response.data.clothes_name;
      price.textContent = response.data.clothes_price + "$";
      desc.textContent = response.data.clothes_desc;
      img.src = response.data.clothes_image;
    } else if (response.name === "equipment") {
      const productName = document.getElementById("productName");
      const price = document.getElementById("price");
      const desc = document.getElementById("desc");
      const img = document.getElementById("image");
      productName.textContent = response.data.equipment_name;
      price.textContent = response.data.equipment_price + "$";
      desc.textContent = response.data.equipment_desc;
      img.src = response.data.equipment_image;
    } else {
      const productName = document.getElementById("productName");
      const price = document.getElementById("price");
      const desc = document.getElementById("desc");
      const img = document.getElementById("image");
      productName.textContent = response.data.supplement_name;
      price.textContent = response.data.supplement_price + "$";
      desc.textContent = response.data.supplement_desc;
      img.src = response.data.supplement_image;
    }
  })
  .catch((err) => {
    console.log(err);
  });

let productToAdd = [];
const button = document.getElementById("addToCart");
console.log("adadsa", button);
button.addEventListener("click", function () {
  console.log("first");
  const confirmationMessage = document.getElementById("confirmation-message");
  let cartData = JSON.parse(localStorage.getItem("productForCart")) || [];

  const productData = JSON.parse(localStorage.getItem("productData"));

  const elIndex = cartData.findIndex(
    (cI) =>
      cI.data[`${productData.name}_id`] ===
      productData.data[`${productData.name}_id`]
  );

  if (elIndex !== -1) {
    console.log("nadjeni index: ", elIndex);
    cartData[elIndex].data.quantity += 1;
  } else {
    productData.data.quantity = 1;
    cartData.push(productData);
  }

  localStorage.setItem("productData", JSON.stringify(productData));
  localStorage.setItem("productForCart", JSON.stringify(cartData));

  // Show confirmation message
  confirmationMessage.classList.add("show");
  setTimeout(function () {
    confirmationMessage.classList.remove("show");
  }, 2000);
});
