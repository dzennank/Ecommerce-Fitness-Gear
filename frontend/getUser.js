export const getUser = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
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
const infoCont = document.getElementById("user-info");
getUser().then(user => {
  if(user.success) {
    const img = document.createElement("img");
    img.src = user.img
    infoCont.appendChild(img);
    const userInfo = document.createElement("span");
    userInfo.id = "header-user-name";
    userInfo.innerHTML = `${user.firstName}  ${user.lastName}`;
    infoCont.appendChild(userInfo);
    if (user.role === "prodavac") {
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