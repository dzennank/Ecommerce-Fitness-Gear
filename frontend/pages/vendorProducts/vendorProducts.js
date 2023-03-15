//acess to user
import { checkUser, getUser } from "../../getUser.js";
checkUser();

const fetchFilteredProducts = (url, method, headers, body) => {
  return fetch(url, {method: method, headers:headers, body: body}).then(response => response.json())
  .then(data => {
    const productContianer = document.getElementById("product-container")
  
    productContianer.innerHTML = "";
        console.log(data)
  
  
        if(data.clothes !== "No Products Found") {
          
          data.clothes.forEach(prod => {
            // console.log(prod)
  
            const product = document.createElement('div')
          product.classList.add('product')
  
          const image = document.createElement('img')
          image.src = prod.clothes_image
  
          const name = document.createElement('h3');
          name.textContent = prod.clothes_name;
  
          const price = document.createElement('p')
          price.textContent = "Price: " + prod.clothes_price + "$";
  
          const neto = document.createElement('p')
        neto.textContent = "Size: " + prod.size;
  
  
          productContianer.appendChild(product)
          product.appendChild(image);
          product.appendChild(name);
          product.appendChild(price);
          product.appendChild(neto);
          })
        } 
        
        if (data.equipment !== "No Products Found") {
          data.equipment.forEach(prod => {
            // console.log(prod)
  
            const product = document.createElement('div')
          product.classList.add('product')
  
          const image = document.createElement('img')
          image.src = prod.equipment_image
  
          const name = document.createElement('h3');
          name.textContent =  prod.equipment_name;
  
          const price = document.createElement('p')
          price.textContent = "Price: " + prod.equipment_price + "$";
  
          // const neto = document.createElement('p')
          // neto.textContent = "Weight: " + prod.equipment_weight;
  
  
          productContianer.appendChild(product)
          product.appendChild(image);
          product.appendChild(name);
          product.appendChild(price);
          // product.appendChild(neto);
          })
        } else {
          console.log("OPREMA", data.equipment)
        }
  
        if(data.supplements !== "No Products Found") {
          data.supplements.forEach(prod => {
            const product = document.createElement('div')
            product.classList.add('product')
    
            const image = document.createElement('img')
            image.src = prod.supplement_image
    
            const name = document.createElement('h3');
            name.textContent = prod.supplement_name;
    
            const price = document.createElement('p')
            price.textContent = "Price: " + prod.supplement_price + "$";
    
            const neto = document.createElement('p')
            neto.textContent = "Weight: " + prod.supplement_weight;
    
    
            productContianer.appendChild(product)
            product.appendChild(image);
            product.appendChild(name);
            product.appendChild(price);
            product.appendChild(neto);
          })
        }
        else {
          console.log("Supplementi", data.supplements)
        }
     });
}

getUser().then(user => {
  let type = "";
  let body = `email=${user.email}&type=${type}`
  const url = "../../../backend/api/vendorProducts_controller.php";
  fetchFilteredProducts(url, "POST", {"Content-Type": "application/x-www-form-urlencoded"}, body);
 
  document.getElementById("type-clothes").addEventListener("click", ()=>{
    let typeC = "clothes";
    let body = `email=${user.email}&type=${typeC}`
    console.log(typeC)
    fetchFilteredProducts(url, "POST", {"Content-Type": "application/x-www-form-urlencoded"}, body)
  });
  document.getElementById("type-equip").addEventListener("click", () =>{
    const typeE = "equipment"
    const body = `email=${user.email}&type=${typeE}`
    fetchFilteredProducts(url, "POST", {"Content-Type": "application/x-www-form-urlencoded"}, body)
  })
  document.getElementById("type-supp").addEventListener("click", () => {
    const typeS = "supplements"
    const body = `email=${user.email}&type=${typeS}`
    fetchFilteredProducts(url, "POST", {"Content-Type": "application/x-www-form-urlencoded"}, body)
  })
  // let body = `email=${user.email}&type=${type}`
  const objToSend = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
    
  }
  
})



    // const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    
    // const userInfo = document.getElementById("header-user-name");
    // userInfo.innerHTML = `${user.ime}  ${user.prezime}`;
    



   