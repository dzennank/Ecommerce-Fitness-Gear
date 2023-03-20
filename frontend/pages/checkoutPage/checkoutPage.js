import { getUser } from "../../getUser.js";
const cartData = JSON.parse(localStorage.getItem("productForCart"));
    console.log(cartData)

const button = document.getElementById("checkout-submit");
button.addEventListener("click", function(){

  const cartData = JSON.parse(localStorage.getItem("productForCart"));
    console.log(cartData)
    getUser().then(user => {
      console.log(user)
      const email = user.email;
      const username = user.firstName + user.lastName;

      fetch("../../../backend/api/orders_controller.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${email}`
      })
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            if(data.success) {
                fetch("../../../backend/api/orderItems_controller.php", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: JSON.stringify(cartData)
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log("first", data)
                   console.log("OVO JE DATA SA ORDER ITEMS", data.success_items)
                   if(data.success_items) {
                    const email = document.getElementById("email").value
                    const firstName = document.getElementById("first-name").value;
                    const lastName = document.getElementById("last-name").value;
                    const username = firstName + " " + lastName;
                    
                    fetch("../../../backend/api/sendMail_controller.php", {
                                       
                      method: "POST",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `email=${email}&username=${username}`
                    }).then(response => response.json())
                    .then(emailData => {
                      console.log("EMAIL RESPONSE = ", emailData)
                      const form = document.getElementById("checkout-form");
                      const popup = document.querySelector(".popup");
                      const btn = document.getElementById("pop-up-btn");
                      popup.style.display = "flex";
                      form.reset();
                     btn.addEventListener("click", () => {
                        
                      localStorage.removeItem("productForCart");

                          popup.style.display = "none";
                          location.href = "../homePage/homePage.html";
                          
                        
                      });
                    
                    })
                  }
                   
                   
                  })
            } else {
                console.log("OVO NE RADI NESTO", data)
            }
        })
    })
    // const user = JSON.parse(localStorage.getItem("user"));
    // const emailInput = document.getElementById("email");


});