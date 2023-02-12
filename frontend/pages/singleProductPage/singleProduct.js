const fatchSingleProductData = () => {
  return new Promise(function (resolve, reject) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const name = urlParams.get("name");

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
