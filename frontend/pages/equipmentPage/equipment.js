// const fetchSupplements = () => {
//     return new Promise(function (resolve, reject) {

        
//         const xhr = new XMLHttpRequest();
//       xhr.open("POST", "../../../backend/api/equipment_controller.php", true);
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
//         product.addEventListener("click", () => {
//           location.href = "../singleProductPage/singleProduct.html?id=" + prod.equipment_id + "&name=equipment"    
//         })

//         const image = document.createElement('img')
//         image.src = prod.equipment_image

//         const name = document.createElement('h4');
//         name.textContent = "Name: " + prod.equipment_name;

//         const price = document.createElement('p')
//         price.textContent = "Price: " + prod.equipment_price + "$";

//         const neto = document.createElement('p')
//         neto.textContent = "Weight: " + prod.equipment_weight;


//         productContianer.appendChild(product)
//         product.appendChild(image);
//         product.appendChild(name);
//         product.appendChild(price);
//         product.appendChild(neto);
//     });
// });

const selectedType= document.querySelector("#type-select").value;
  // const priceSelectElement = document.querySelector("#price-select");
  // const genderSelectElement = document.querySelector("#gender-select");
  const priceFrom = document.getElementById("price-from");
  const priceTo = document.getElementById("price-to").value;
const handleFiltering = () => {
  

  // const selectedSize = sizeSelectElement.value;
  // const selectedPrice = priceSelectElement.value;
  // const selectedGender = genderSelectElement.value;
  console.log(selectedType)
  console.log(priceFrom.value)
  console.log(priceTo)

  // fetch("../../../backend/api/clothes_controller.php", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   },
  //   body: `selectedType=${selectedType}&priceFrom=${priceFrom}&priceTo=${priceTo}`
  // })
  //   .then(response => response.json())
  //   .then(data => { 
  //     // Handle the returned data from the PHP API

  //     if (!data.message) {
  //       const productContianer = document.getElementById("product-container")
  //     productContianer.innerHTML = ""; // Clear the product container

  //   data.forEach(prod => {
      
  //       const product = document.createElement('div')
  //       product.classList.add('product')
  //       product.addEventListener("click", () => {
  //         location.href = "../singleProductPage/singleProduct.html?id=" + prod.equipment_id + "&name=equipment"    
  //       })

  //       const image = document.createElement('img')
  //       image.src = prod.equipment_image

  //       const name = document.createElement('h3');
  //       name.textContent = "Name: " + prod.equipment_name;

  //       const price = document.createElement('p')
  //       price.textContent = "Price: " + prod.equipment_price + "$";

  //       // const neto = document.createElement('p')
  //       // neto.textContent = "Size: " + prod.size;


  //       productContianer.appendChild(product)
  //       product.appendChild(image);
  //       product.appendChild(name);
  //       product.appendChild(price);
  //       // product.appendChild(neto);
  //   });
  //     } else {
  //       alert("Filtered products are not found");
  //     }
      
      
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}
handleFiltering();
// sizeSelectElement.addEventListener("change", handleFiltering);
// priceSelectElement.addEventListener("change", handleFiltering);
// genderSelectElement.addEventListener("change", handleFiltering);
