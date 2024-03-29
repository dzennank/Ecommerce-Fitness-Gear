// document
//   .getElementById("registration-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     sendRegistrationData();
//   });

// const sendRegistrationData = () => {
//   // const form = document.getElementById('registration-form');
//   // const image = document.getElementById('image');

//   // const formData = new FormData();

//   // console.log(formData.append('image', image.files[0]))

//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "../../../backend/api/register_controller.php", true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//   xhr.onload = function () {
//     const response = JSON.parse(this.responseText);
//     console.log(response);
//     if (response.success) {
//       location.href = "../login/login.html";
//     } else {
//       alert("Error");
//     }
//   };

//   const username = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const confrimPassword = document.getElementById("confirmPassword").value;
//   const sex = document.querySelector('input[name="sex"]:checked').value;
//   const place_birth = document.getElementById("place_birth").value;
//   const country = document.getElementById("country").value;
//   const birthday = document.getElementById("birthday").value;
//   const jmbg = document.getElementById("jmbg").value;
//   const phone = document.getElementById("phone").value;
//   // const img = document.getElementById("img").value;
//   const user_type = document.querySelector('input[name="type"]:checked').value;

//   //Password validation
//   let pattern =
//     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])([A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,})$/;

//   if (pattern.test(password) && password === confrimPassword) {
//     const data =
//       "username=" +
//       encodeURIComponent(username) +
//       "&lastName=" +
//       encodeURIComponent(lastName) +
//       "&email=" +
//       encodeURIComponent(email) +
//       "&password=" +
//       encodeURIComponent(password) +
//       "&confirmPassword=" +
//       encodeURIComponent(confrimPassword) +
//       "&sex=" +
//       encodeURIComponent(sex) +
//       "&place_birth=" +
//       encodeURIComponent(place_birth) +
//       "&country=" +
//       encodeURIComponent(country) +
//       "&birthday=" +
//       encodeURIComponent(birthday) +
//       "&jmbg=" +
//       encodeURIComponent(jmbg) +
//       "&phone=" +
//       encodeURIComponent(phone) +
//       "&user_type=" +
//       encodeURIComponent(user_type);
//     xhr.send(data);
//   } else {
//     alert(
//       "Lozinka mora poceti sa velikim slovom i sadrzati barem jedan broj i spec karakter. Takodje lozinka se mora poklapati sa unetom potvrdjenom lozinkom!!"
//     );
//   }
// };

document
.getElementById("registration-form")
.addEventListener("submit", function (event) {
event.preventDefault();
sendRegistrationData();
});

const sendRegistrationData = () => {
const url = "../../../backend/api/register_controller.php";

const formData = new FormData(document.getElementById('registration-form'));

fetch(url, {
method: 'POST',
body: formData
})
.then(response => response.json())
.then(data => {
console.log(data);
if (data.success) {
    const btn = document.getElementById("pop-up-btn");
 const popup = document.querySelector(".popup");
 popup.style.display = "flex";
 btn.addEventListener("click", () => {
        popup.style.display = "none";
        location.href = "../login/login.html";
         });

} else {
alert("Error");
}
})
.catch(error => console.error(error));
};