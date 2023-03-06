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

//Checking which user is loged in
export const checkUser= () => {
  const userInfo = document.getElementById("header-user-name");
const myProducts = document.getElementById("prodavac");
getUser().then(user => {
  if(user.success) {
    userInfo.innerHTML = `${user.firstName}  ${user.lastName}`;
    if (user.role === "Kupac") {
      myProducts.innerHTML = "My Products";
      myProducts.href = "../../pages/vendorProducts/vendorProducts.html";
    
    } else if(user.role === "Admin") {
      console.log("AMDINNN")
      myProducts.innerHTML = "Dashboard";
      myProducts.href = "../../admin/dashboardPage/dashboard/index.html"
    }
  } else {
    alert("Please login to acess to this page")
    location.href = "../login/login.html";
  }
})
}