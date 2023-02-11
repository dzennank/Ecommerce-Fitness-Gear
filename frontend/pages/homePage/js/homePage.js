import { fatchHomePageData } from 'http://localhost/Web%20Programiranje/frontend/pages/homePage/js/fatchHomePageData.js';

const clothesContainer = document.getElementById("products-cont")
console.log(clothesContainer)

fatchHomePageData().then(([supp, clothes, equip]) => {
  console.log("SUPLEMENTI: ", supp)
  console.log("OPREMA: ", equip)
  console.log("ODECA: ", clothes)

clothes.forEach(clot => {
  const clotBox = document.createElement('div');
  clotBox.classList.add('product');

  const hover = document.createElement('div')
  hover.classList.add('product-hover');

  const clotImg = document.createElement('img');
  clotImg.src = clot.clothes_image
  clotImg.alt = clot.clothes_name

  const clotName = document.createElement('h3')
  clotName.textContent = clot.clothes_name;

  const clotPrice = document.createElement('p');
  clotPrice.textContent = clot.clothes_price;

  const viewMoreButton = document.createElement('a');
  viewMoreButton.textContent = 'View More';

  clotBox.appendChild(clotImg);
  clotBox.appendChild(clotName);
  hover.appendChild(clotPrice);
  hover.appendChild(viewMoreButton)

  clotBox.appendChild(hover)
  clothesContainer.appendChild(clotBox);

}); 
});


var slideIndex = 1;
showSlides(slideIndex);

 function plusSlides(n) {
  showSlides(slideIndex += n);
}

window.plusSlides = plusSlides;
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

