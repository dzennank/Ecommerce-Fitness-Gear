// const fetchSupplements = () => {
//     return new Promise(function (resolve, reject) {

        
//         const xhr = new XMLHttpRequest();
//       xhr.open("POST", "../../../backend/api/supplements_controller.php", true);
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

//     data.forEach(supp => {
//         const product = document.createElement('div')
//         product.classList.add('product')

//         const image = document.createElement('img')
//         image.src = supp.supplement_image

//         const name = document.createElement('h3');
//         name.textContent = "Name: " + supp.supplement_name;

//         const price = document.createElement('p')
//         name.textContent = "Price: " + supp.supplement_price + "$";

//         const neto = document.createElement('p')
//         neto.textContent = "Weight: " + supp.supplement_weight;


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
  

  const selectedType = sizeSelectElement.value;
  const selectedPrice = priceSelectElement.value;
  const selectedWeight = genderSelectElement.value;
  // console.log(selectedType)
  // console.log(selectedPrice)
  // console.log(selectedGender)

  fetch("../../../backend/api/supplements_controller.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `selectedType=${selectedType}&selectedPrice=${selectedPrice}&selectedWeight=${selectedWeight}`
  })
    .then(response => response.json())
    .then(data => { 
      // Handle the returned data from the PHP API

      if (!data.message) {
        console.log(data)
        const productContianer = document.getElementById("product-container")
      productContianer.innerHTML = ""; // Clear the product container

    data.forEach(prod => {
      
        const product = document.createElement('div')
        product.classList.add('product')
        product.addEventListener("click", () => {
          location.href = "../singleProductPage/singleProduct.html?id=" + prod.supplement_id + "&name=supplement"    
        })

        const image = document.createElement('img')
        image.src = prod.supplement_image

        const name = document.createElement('h3');
        name.textContent = "Name: " + prod.supplement_name;

        const price = document.createElement('p')
        price.textContent = "Price: " + prod.supplement_price + "$";

        const neto = document.createElement('p')
        neto.textContent = "Size: " + prod.supplement_weight;

        // const link = document.createElement("a");
        // link.href = "../singleProductPage/singleProduct.html"


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
