export const handleLogOut = (lgnButton) => {
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
            data.success ? localStorage.clear() : console.log("Error from response")
        })
            
        


})
}