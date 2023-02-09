var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-container")[0].children;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
const user = JSON.parse(localStorage.getItem('user'));
console.log(user)

//inesrting name of logined user
const userInfo = document.getElementById("header-user-name");
userInfo.innerHTML = `${user.ime}  ${user.prezime}`


if(user.tip === "Kupac") {
  
  const myProducts = document.getElementById("prodavac");
  
  myProducts.innerHTML = "My Products"
} 
