// import {} from "../../../../backend/api"

export const fetchHomePageData = () => {
  const promises = [];

  // fetch supplement data
  promises.push(
    fetch("backend/api/suppBestSeller_controller.php")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
  );

  // fetch clothes data
  promises.push(
    fetch("backend/api/clothesBestSeller_controller.php")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
  );

  // fetch equipment data
  promises.push(
    fetch("backend/api/equipBestSeller_controller.php")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
  );

  return Promise.all(promises);
    }


