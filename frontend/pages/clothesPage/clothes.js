const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

//inesrting name of logined user
const userInfo = document.getElementById("header-user-name");
userInfo.innerHTML = `${user.ime}  ${user.prezime}`;

const sizeSelectElement = document.querySelector("#type-select");
const selectedPriceFrom = document.getElementById("price-from");
const selectedPriceTo = document.getElementById("price-to");
  const genderSelectElement = document.querySelector("#gender-select");
const handleFiltering = () => {
  

  const selectedSize = sizeSelectElement.value;
  const priceFrom = selectedPriceFrom.value;
  const priceTo = selectedPriceTo.value;
  
  const selectedGender = genderSelectElement.value;
 

  fetch("../../../backend/api/clothes_controller.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `selectedSize=${selectedSize}&priceFrom=${priceFrom}&priceTo=${priceTo}&selectedGender=${selectedGender}`
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
genderSelectElement.addEventListener("change", handleFiltering);