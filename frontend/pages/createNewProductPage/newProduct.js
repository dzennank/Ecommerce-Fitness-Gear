const handleOnChange = () => {
    const selectedType = document.getElementById("select-type")
    const selectedTypeValue = selectedType.value;

    console.log(selectedTypeValue)
    const form = document.getElementById("product-form");
    const container = document.getElementById("container");
    container.innerHTML = "";
    console.log(form)
    if(selectedTypeValue === "clothes") {
        
        //creating gender select
        const genderLabel = document.createElement('label');
        genderLabel.textContent = "Gender";
        const gender = document.createElement('select');
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
        sizeLabel.id = "size-label"

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

        const button = document.createElement('button');
        button.type = "submit"
        button.textContent = "Create"
        container.appendChild(button);
    } 

    if(selectedTypeValue === "supplements") {
        const itemToRemove = document.getElementById("size-label");
        if(itemToRemove) {

            itemToRemove.remove();
        }
        //creating gender select
        const typeLabel = document.createElement('label');
        typeLabel.textContent = "Type Of Supplement";
        const type = document.createElement('select');
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

        const button = document.createElement('button');
        button.type = "submit"
        button.textContent = "Create"
        container.appendChild(button);
    }

    if(selectedTypeValue === "equipment") {
        const typeLabel = document.createElement('label');
        typeLabel.textContent = "Type Of Equipment";

        const input = document.createElement('input')
        input.type = "text";

        container.appendChild(typeLabel);
        container.appendChild(input);

        const button = document.createElement('button');
        button.type = "submit"
        button.textContent = "Create"
        container.appendChild(button);
    }
}