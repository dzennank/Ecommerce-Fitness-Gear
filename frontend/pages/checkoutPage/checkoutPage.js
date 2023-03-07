import { getUser } from "../../getUser.js";




const handleOrderButton = () => {
    const cartData = JSON.parse(localStorage.getItem("productForCart"));
    console.log(cartData)
    getUser().then(user => {
      console.log(user)
      const email = user.email;

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
                    console.log(data)
                  })
            } else {
                console.log("OVO NE RADI NESTO", data)
            }
        })
    })
    // const user = JSON.parse(localStorage.getItem("user"));
    // const emailInput = document.getElementById("email");
    
   
}

const button = document.getElementById("checkout-submit");
button.addEventListener("click", function(){

  const cartData = JSON.parse(localStorage.getItem("productForCart"));
    console.log(cartData)
    getUser().then(user => {
      console.log(user)
      const email = user.email;

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
                    console.log(data)
                  })
            } else {
                console.log("OVO NE RADI NESTO", data)
            }
        })
    })
    // const user = JSON.parse(localStorage.getItem("user"));
    // const emailInput = document.getElementById("email");

});