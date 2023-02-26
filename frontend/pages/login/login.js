document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendLoginData();
  });

const sendLoginData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../../../backend/api/login_controller.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    const response = JSON.parse(this.responseText);
    console.log(response);
    if (response.success) {
      localStorage.setItem("user", JSON.stringify(response));
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user)
      location.href = "../homePage/homePage.html";
    } else {
      alert("Error");
    }
  };

  const data =
    "email=" +
    encodeURIComponent(email) +
    "&password=" +
    encodeURIComponent(password);
  xhr.send(data);
  console.log(data);
};

const user = JSON.parse(localStorage.getItem("user"));
      console.log("KORISNIK", user)