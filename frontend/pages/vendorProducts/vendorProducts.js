//acess to user



    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    
    const userInfo = document.getElementById("header-user-name");
    userInfo.innerHTML = `${user.ime}  ${user.prezime}`;
    


fetch("../../../backend/api/vendorProducts_controller.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `email=${user.email}`
    
  })
    .then(response => response.json())
    .then(data => {
        console.log(data)
     })