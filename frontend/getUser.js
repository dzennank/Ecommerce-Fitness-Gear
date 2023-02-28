export const getUser = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch("../../../backend/api/tokenAuth_controller.php", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        
      })
        .then(response => response.json())
        
        
}