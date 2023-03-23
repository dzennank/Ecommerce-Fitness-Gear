
const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
     fetch("http://localhost/fitness-ecommerce/Ecommerce-Fitness-Gear/backend/api/tokenAuth_controller.php", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        
      })
        .then(response => response.json())
        .then(user => {
  const adminUsername = document.getElementById("admin-name");
  console.log(adminUsername)
  adminUsername.innerText =` ${user.firstName} ${user.lastName}`;
})
const getProducts = () => {
  const supp = document.getElementById("supplements");
  const clothes = document.getElementById("clothes");
  const equip = document.getElementById("equipment");
  const total = document.getElementById("total");

  fetch(
    "../../../../../Ecommerce-Fitness-Gear/backend/api/dashboard/dashboardProducts_controller.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      supp.innerHTML = data.numberOfSupplements;
      clothes.innerHTML = data.numberOfClothes;
      equip.innerHTML = data.numberOfEquip;
      total.innerHTML = data.total;
    });
};
getProducts();

