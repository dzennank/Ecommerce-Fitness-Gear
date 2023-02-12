const fetchSupplements = () => {
    return new Promise(function (resolve, reject) {

        
        const xhr = new XMLHttpRequest();
      xhr.open("POST", "../../../backend/api/clothes_controller.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
      xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
    
      xhr.send()
    })
}

fetchSupplements().then(data => {
    console.log(data)

    const productContianer = document.getElementById("product-container")

    data.forEach(prod => {
        const product = document.createElement('div')
        product.classList.add('product')

        const image = document.createElement('img')
        image.src = prod.clothes_image

        const name = document.createElement('h3');
        name.textContent = "Name: " + prod.clothes_name;

        const price = document.createElement('p')
        name.textContent = "Price: " + prod.clothes_price + "$";

        const neto = document.createElement('p')
        neto.textContent = "Size: " + prod.size;


        productContianer.appendChild(product)
        product.appendChild(image);
        product.appendChild(name);
        product.appendChild(price);
        product.appendChild(neto);
    });
});