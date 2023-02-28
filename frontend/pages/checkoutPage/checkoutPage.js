import { checkUser } from "../../getUser.js";


checkUser()

const handleOrderButton = () => {
    const cartData = JSON.parse(localStorage.getItem("productForCart"));
    console.log(cartData)
    const user = JSON.parse(localStorage.getItem("user"));
    // const emailInput = document.getElementById("email");
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
}