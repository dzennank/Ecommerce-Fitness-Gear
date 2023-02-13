// import {  } from "../../../../backend/api/";
export const fatchHomePageData = () => {
  const promises = [];

  const getSupp = new XMLHttpRequest();
  getSupp.open(
    "GET",
    "http://localhost/fitness-ecommerce/Ecommerce-Fitness-Gear/backend/api/suppBestSeller_controller.php",
    true
  );
  promises.push(
    new Promise((resolve, reject) => {
      getSupp.onload = () => {
        if (getSupp.status === 200) {
          resolve(JSON.parse(getSupp.responseText));
        } else {
          reject(getSupp.statusText);
        }
      };
      getSupp.onerror = () => reject(getSupp.statusText);
      getSupp.send();
    })
  );

  //fatch clothes
  const getClothes = new XMLHttpRequest();
  getClothes.open(
    "GET",
    "http://localhost/fitness-ecommerce/Ecommerce-Fitness-Gear/backend/api/clothesBestSeller_controller.php",
    true
  );
  promises.push(
    new Promise((resolve, reject) => {
      getClothes.onload = () => {
        if (getSupp.status === 200) {
          resolve(JSON.parse(getClothes.responseText));
        } else {
          reject(getClothes.statusText);
        }
      };

      getClothes.onerror = () => reject(getClothes.statusText);
      getClothes.send();
    })
  );

  //fatch equipment
  const getEquip = new XMLHttpRequest();
  getEquip.open(
    "GET",
    "http://localhost/fitness-ecommerce/Ecommerce-Fitness-Gear/backend/api/equipBestSeller_controller.php",
    true
  );
  promises.push(
    new Promise((resolve, reject) => {
      getEquip.onload = () => {
        if (getSupp.status === 200) {
          resolve(JSON.parse(getEquip.responseText));
        } else {
          reject(getEquip.statusText);
        }
      };

      getEquip.onerror = () => reject(getEquip.statusText);
      getEquip.send();
    })
  );
  return Promise.all(promises);
};
