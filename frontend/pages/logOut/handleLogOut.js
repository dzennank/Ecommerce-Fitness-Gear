export const handleLogOut = (lgnButton) => {
  // console.log("first")
    lgnButton.addEventListener("click", ()=>{
        const token = JSON.parse(localStorage.getItem("token"));
    return fetch("../../../backend/api/deleteToken_controller.php", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        
      })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.success) {
              localStorage.clear()
              location.href = "../login/login.html"
            }
            else {
              console.log("Error from response")
            } 
        })
            
        


})
}