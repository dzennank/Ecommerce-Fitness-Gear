// const fetchSupplements = () => {
//     return new Promise(function (resolve, reject) {

        
//         const xhr = new XMLHttpRequest();
//       xhr.open("POST", "../../../backend/api/clothes_controller.php", true);
//       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
//       xhr.onload = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject(xhr.statusText);
//         }
//       };
    
//       xhr.send()
//     })
// }

// fetchSupplements().then(data => {
//     console.log(data)

//     const productContianer = document.getElementById("product-container")

//     data.forEach(prod => {
//         const product = document.createElement('div')
//         product.classList.add('product')

//         const image = document.createElement('img')
//         image.src = prod.clothes_image

//         const name = document.createElement('h3');
//         name.textContent = "Name: " + prod.clothes_name;

//         const price = document.createElement('p')
//         name.textContent = "Price: " + prod.clothes_price + "$";

//         const neto = document.createElement('p')
//         neto.textContent = "Size: " + prod.size;


//         productContianer.appendChild(product)
//         product.appendChild(image);
//         product.appendChild(name);
//         product.appendChild(price);
//         product.appendChild(neto);
//     });
// });

const sizeSelectElement = document.querySelector("#type-select");
  const priceSelectElement = document.querySelector("#price-select");
  const genderSelectElement = document.querySelector("#gender-select");
const handleFiltering = () => {
  

  const selectedSize = sizeSelectElement.value;
  const selectedPrice = priceSelectElement.value;
  const selectedGender = genderSelectElement.value;
  console.log(selectedSize)
  console.log(selectedPrice)
  console.log(selectedGender)

  fetch("../../../backend/api/clothes_controller.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `selectedSize=${selectedSize}&selectedPrice=${selectedPrice}&selectedGender=${selectedGender}`
  })
    .then(response => response.json())
    .then(data => { 
      // Handle the returned data from the PHP API

      if (!data.message) {
        const productContianer = document.getElementById("product-container")
      productContianer.innerHTML = ""; // Clear the product container

    data.forEach(prod => {
      
        const product = document.createElement('div')
        product.classList.add('product')
        product.addEventListener("click", () => {
          location.href = "../singleProductPage/singleProduct.html?id=" + prod.clothes_id + "&name=clothes"    
        })

        const image = document.createElement('img')
        image.src = prod.clothes_image

        const name = document.createElement('h3');
        name.textContent = "Name: " + prod.clothes_name;

        const price = document.createElement('p')
        price.textContent = "Price: " + prod.clothes_price + "$";

        const neto = document.createElement('p')
        neto.textContent = "Size: " + prod.size;


        productContianer.appendChild(product)
        product.appendChild(image);
        product.appendChild(name);
        product.appendChild(price);
        product.appendChild(neto);
    });
      } else {
        alert("Filtered products are not found");
      }
      
      
    })
    .catch(error => {
      console.error(error);
    });
}
handleFiltering();
sizeSelectElement.addEventListener("change", handleFiltering);
priceSelectElement.addEventListener("change", handleFiltering);
genderSelectElement.addEventListener("change", handleFiltering);