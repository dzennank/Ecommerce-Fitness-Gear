document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendRegistrationData();
  });
  

  const sendRegistrationData = () => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "../../../backend/api/register_controller.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
        xhr.onload = function() {
     
            console.log(this)
            const response = this.responseText;
            console.log(response)
            if (response === "Connected successfully") {
              location.href = "../homePage/homePage.html"
            } else {
              alert("Error")
            }
          
        };
      
        const username = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confrimPassword = document.getElementById("confirmPassword").value
        const sex = document.getElementById("sex").value;
        const place_birth = document.getElementById("place_birth").value;
        const country = document.getElementById("country").value;
        const birthday = document.getElementById("birthday").value
        const jmbg = document.getElementById("jmbg").value;
        const phone = document.getElementById("phone").value;
        const img = document.getElementById("img").value;
        const user_type = document.getElementById("user_type").value
        
        const data = "username=" + encodeURIComponent(username) + "&email=" + encodeURIComponent(email)
         + "&password=" + encodeURIComponent(password) + "&confirmPassword=" + encodeURIComponent(confrimPassword)
           + "&sex=" + encodeURIComponent(sex) + "&place_birth=" + encodeURIComponent(place_birth)
           + "&country=" + encodeURIComponent(country) + "&birthday=" + encodeURIComponent(birthday)
           + "&jmbg" + encodeURIComponent(jmbg) + "&phone=" + encodeURIComponent(phone)
           + "&img=" + encodeURIComponent(img) + "&user_type" + encodeURIComponent(user_type)
          ;
        xhr.send(data);
        console.log(data)
        
      
      
  }