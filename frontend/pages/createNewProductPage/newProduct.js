const handleOnChange = () => {
    const selectedType = document.getElementById("select-type")
    const selectedTypeValue = selectedType.value;

    console.log(selectedTypeValue)
    const form = document.getElementById("product-form");
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

        form.appendChild(genderLabel);
        form.appendChild(gender);
        gender.appendChild(male);
        gender.appendChild(female);

        //creating size select
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = "Size"

        const size = document.createElement('select');
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

        form.appendChild(sizeLabel);
        form.appendChild(size);

        size.appendChild(s);
        size.appendChild(m);
        size.appendChild(l);
        size.appendChild(xl);
        size.appendChild(xxl);

        const button = document.createElement('button');
        button.type = "submit"
        button.textContent = "Create"
        form.appendChild(button);
    }
}