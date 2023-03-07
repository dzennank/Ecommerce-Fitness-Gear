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
