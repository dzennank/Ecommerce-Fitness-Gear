const Password = document.getElementById("login-pass");
const Icon = document.getElementsByClassName("login-hideShow")[0];

const showHidePass = () => {
	if (Password.type === "password") {
		Password.type = "text";
		Icon.classList.replace("uil-eye-slash", "uil-eye");
	} else {
		Password.type = "password";
		Icon.classList.replace("uil-eye", "uil-eye-slash");
	}
};

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendLoginData();
  });

const sendLoginData = () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../../../backend/api/login_controller.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    const response = JSON.parse(this.responseText);
    console.log(response);
    if (response.success) {
      localStorage.setItem("token", JSON.stringify(response.token));
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token)
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