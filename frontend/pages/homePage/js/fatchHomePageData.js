//Fatch Supplements data
// export const fatchHomePageData = () => {
//     return new Promise((resolve, reject) => {
//       const promises = [];
      
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', "http://localhost/Web%20Programiranje/backend/api/supplements_controller.php", true);
//         xhr.onreadystatechange = function() {
//           if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//             resolve(JSON.parse(this.responseText));
            
//           }
//         };
//         xhr.send();
//     })
// }

export const fatchHomePageData = () => {
  const promises = [];

  const getSupp = new XMLHttpRequest();
  getSupp.open('GET', "http://localhost/Web%20Programiranje/backend/api/supplements_controller.php", true);
  promises.push(new Promise((resolve, reject) => {
    getSupp.onload = () => {
      if(getSupp.status === 200) {
        resolve(JSON.parse(getSupp.responseText))
      } else {
        reject(getSupp.statusText)
      }
    }
    getSupp.onerror = () => reject(getSupp.statusText);
    getSupp.send();

  }));

  //fatch clothes
  const getClothes = new XMLHttpRequest();
  getClothes.open('GET', "http://localhost/Web%20Programiranje/backend/api/clothes_controller.php", true);
  promises.push(new Promise((resolve, reject) => {
    getClothes.onload = () => {
      if(getSupp.status === 200) {
        resolve(JSON.parse(getClothes.responseText))
      } else {
        reject(getClothes.statusText)
      }
    }

    getClothes.onerror = () => reject(getClothes.statusText);
    getClothes.send();
  }));

  //fatch equipment
  const getEquip = new XMLHttpRequest();
  getEquip.open('GET', "http://localhost/Web%20Programiranje/backend/api/equipment_controller.php", true);
  promises.push(new Promise((resolve, reject) => {
    getEquip.onload = () => {
      if(getSupp.status === 200) {
        resolve(JSON.parse(getEquip.responseText))
      } else {
        reject(getEquip.statusText)
      }
    }

    getEquip.onerror = () => reject(getEquip.statusText);
    getEquip.send();
  }));
  return Promise.all(promises);
}

