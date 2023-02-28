import { checkUser } from "../../getUser.js";


checkUser()
const handleOnChange = () => {
    const selectedType = document.getElementById("select-type")
    const selectedTypeValue = selectedType.value;

    console.log(selectedTypeValue)
    const form = document.getElementById("product-form");
    const container = document.getElementById("container");
    container.innerHTML = ""
    console.log(form)
    if(selectedTypeValue === "clothes") {
        
        //creating gender select
        const genderLabel = document.createElement('label');
        genderLabel.textContent = "Gender";

        const gender = document.createElement('select');
        gender.id = "select-gender"
        const male = document.createElement('option');
        const female = document.createElement('option')
        male.textContent = "musko"
        female.textContent = "zensko"

        container.appendChild(genderLabel);
        container.appendChild(gender);
        gender.appendChild(male);
        gender.appendChild(female);

        //creating size select
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = "Size"
        

        const size = document.createElement('select');
        size.id = "clothes-size"
        const s = document.createElement('option');
        const m = document.createElement('option');
        const l = document.createElement('option');
        const xl = document.createElement('option');
        const xxl = document.createElement('option');
        s.textContent = "S"
        m.textContent = "M"
        l.textContent = "L"
        xl.textContent = "XL"
        xxl.textContent = "XXL"

        container.appendChild(sizeLabel);
        container.appendChild(size);

        size.appendChild(s);
        size.appendChild(m);
        size.appendChild(l);
        size.appendChild(xl);
        size.appendChild(xxl);

        // const button = document.createElement('button');
        // button.type = "submit"
        // button.textContent = "Create"
        // button.id = "submit-button"
        
        // container.appendChild(button);
        
    } 

    if(selectedTypeValue === "supplements") {
        
        //creating gender select
        const typeLabel = document.createElement('label');
        typeLabel.textContent = "Type Of Supplement";
        const type = document.createElement('select');
        type.id = "supp-type";
        const protein = document.createElement('option');
        const creatine = document.createElement('option')
        selectTypeOption = document.createElement('option');
        selectTypeOption.textContent = "Select Type Of Supplement"
        selectTypeOption.hidden = true;
        protein.textContent = "protein"
        creatine.textContent = "kreatin"

        container.appendChild(typeLabel);
        container.appendChild(type);
        type.appendChild(selectTypeOption);
        type.appendChild(protein);
        type.appendChild(creatine);

        //creating size select
        const weightLabel = document.createElement('label');
        weightLabel.textContent = "Weight"

        const size = document.createElement('select');
        size.id = "weight";
        const s = document.createElement('option');
        const m = document.createElement('option');
        const l = document.createElement('option');
        const xl = document.createElement('option');
        const xxl = document.createElement('option');
        s.textContent = "200gr"
        m.textContent = "300gr"
        l.textContent = "2kg"
        xl.textContent = "3kg"
        xxl.textContent = "5kg"

        container.appendChild(weightLabel);
        container.appendChild(size);

        size.appendChild(s);
        size.appendChild(m);
        size.appendChild(l);
        size.appendChild(xl);
        size.appendChild(xxl);

        const suppType = document.getElementById("supp-type").value;
        const weight = document.getElementById("weight").value;
        console.log(suppType, weight)

        
    }

    if(selectedTypeValue === "equipment") {
        const typeLabel = document.createElement('label');
        typeLabel.textContent = "Type Of Equipment";

        const input = document.createElement('input')
        input.type = "text";
        input.id = "equip-type";

        container.appendChild(typeLabel);
        container.appendChild(input);

        
    }
}

const user = JSON.parse(localStorage.getItem("user"));
const email = user.email


const handleClick = () => {
    console.log("first")
    const selectedType = document.getElementById("select-type")
    const selectedTypeValue = selectedType.value;
    const name = document.getElementById("name").value
    const image = document.getElementById("image").value
    const price = document.getElementById("price").value
    const desc = document.getElementById("description").value

    let bodyHandle = ""
    if(selectedTypeValue === "clothes") {
        const selectedGender = document.getElementById("select-gender").value;
        console.log(selectedGender)
        const selectedSize = document.getElementById("clothes-size").value;
        bodyHandle = `email=${email}&selectedTypeValue=${selectedTypeValue}&name=${name}&image=${image}&prie=${price}&desc=${desc}&selectedGender=${selectedGender}&selectedSize=${selectedSize}`;
    } else if (selectedTypeValue === "supplements") {
        const suppType = document.getElementById("supp-type").value;
        const weight = document.getElementById("weight").value;
        console.log(suppType, weight)
        bodyHandle = `email=${email}&selectedTypeValue=${selectedTypeValue}&name=${name}&image=${image}&price=${price}&desc=${desc}&suppType=${suppType}&weight=${weight}`;
    } else {
        const equipType = document.getElementById("equip-type").value;
        bodyHandle = `email=${email}&selectedTypeValue=${selectedTypeValue}&name=${name}&image=${image}&price=${price}&desc=${desc}&equipType=${equipType}`;
    }
    

    fetch("../../../backend/api/createProduct_controller.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyHandle
        
      })
      .then(response => response.json())
    .then(data => {
        if(data.success === true) {
            alert("Product succesfully created");
        } else {
            alert("Product is not succesfully created");
        }
    })
}

// document.getElementById("submit-button").addEventListener("submit", function(e){
//     e.preventDefault
//     handleClick();
// })