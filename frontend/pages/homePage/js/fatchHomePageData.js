//Fatch Supplements data
export const fatchHomePageData = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "http://localhost/Web%20Programiranje/backend/api/supplements_controller.php", true);
        xhr.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            resolve(JSON.parse(this.responseText));
            
          }
        };
        xhr.send();
    })
}