const cartData = JSON.parse(localStorage.getItem("productForCart"));
console.log(cartData);

const tBody = document.getElementById("t-body");

let rowCounter = 0;
let rowSuppCounter = 0;
let rowEquipCounter = 0;
let totalPriceToPay = [];
cartData.forEach((data) => {
  if (data.name === "clothes") {
    const rowId = `product-row-${rowCounter}`;
    const quantityId = `quantity-${rowCounter}`;
    const priceId = `price-${rowCounter}`;
    const totalId = `total-price-${rowCounter}`;
    
    const row = document.createElement("tr");
    row.id = rowId;
    const tableData = document.createElement("td");
    const img = document.createElement("img");
    img.src = data.data.clothes_image;

    const productName = document.createElement("span");
    productName.textContent = data.data.clothes_name;

    const tableDataPrice = document.createElement("td");
    tableDataPrice.id = priceId;
    tableDataPrice.textContent = "$" + data.data.clothes_price;

    const tableDataButtons = document.createElement("td");
    const quantity = document.createElement("span");
    quantity.classList.add("quantity");
    quantity.id = quantityId;
    quantity.textContent = 1;
    const totalData = document.createElement("td");
    totalData.textContent = "$" + data.data.clothes_price;
    totalData.id = totalId;
    const minusButton = document.createElement("button");
    const plusButton = document.createElement("button");
    minusButton.classList.add("quantity-btn-decrease");
    plusButton.classList.add("quantity-btn-increase");
    minusButton.textContent = "-";
    plusButton.textContent = "+";
    plusButton.addEventListener("click", () => {
      const totalPriceElement = document.getElementById(totalId);
      const price = document.getElementById(priceId);

      const totalPriceElementValue = totalPriceElement.textContent;
      const priceValue = price.textContent;
      let totalPriceElementValueWithoutDollar = parseFloat(
        totalPriceElementValue.replace("$", "")
      );
     

      const totalPriceValue = parseFloat(priceValue.replace("$", ""));
      totalPriceToPay.push(totalPriceValue);
      console.log(totalPriceToPay)
      const sumToPay = totalPriceToPay.reduce((acc, curr) => acc + curr, 0);
// console.log(sumToPay);
  const totalToPay = document.getElementById("total-to-pay");
  totalToPay.textContent = "$" + sumToPay;
      let totalPrice = totalPriceElementValueWithoutDollar;
      //  totalPrice += totalPriceValue;
      const totalValueEnd = totalPrice + totalPriceValue;
      console.log(totalValueEnd);
      totalPriceElement.textContent = "$" + totalValueEnd;

      //Handle Button Value Here
      const incButton = document.getElementById(quantityId);
      let buttonNumber = parseInt(incButton.textContent);
      const quantityValue = buttonNumber + 1;
      incButton.textContent = quantityValue;
    });

    //HANDLE DECREASE OF QUANTITY AND PRICE
    minusButton.addEventListener("click", () => {
      const incButton = document.getElementById(quantityId);
      let buttonNumber = parseInt(incButton.textContent);
      if (buttonNumber > 1) {
        const totalPriceElement = document.getElementById(totalId);
        const price = document.getElementById(priceId);

        const totalPriceElementValue = totalPriceElement.textContent;
        const priceValue = price.textContent;
        let totalPriceElementValueWithoutDollar = parseFloat(
          totalPriceElementValue.replace("$", "")
        );

        const totalPriceValue = parseFloat(priceValue.replace("$", ""));
        let totalPrice = totalPriceElementValueWithoutDollar;
        //  totalPrice += totalPriceValue;
        const totalValueEnd = totalPrice - totalPriceValue;
        console.log(totalValueEnd);
        totalPriceElement.textContent = "$" + totalValueEnd;

        //Handle Button Value Here

        const quantityValue = buttonNumber - 1;
        incButton.textContent = quantityValue;
      } else {
        let updatedCartData = cartData.filter((data) => {
          return data.name !== "clothes";
        });
        localStorage.setItem("productForCart", JSON.stringify(updatedCartData));
        const productRow = document.getElementById(rowId);
        productRow.innerHTML = "";
      }
    });

   
    

    tableDataButtons.appendChild(minusButton);
    tableDataButtons.appendChild(quantity);
    tableDataButtons.appendChild(plusButton);

    tableData.appendChild(img);
    tableData.appendChild(productName);
    row.appendChild(tableData);
    row.appendChild(tableDataPrice);
    row.appendChild(tableDataButtons);
    row.appendChild(totalData);
    tBody.appendChild(row);

    //Creating array to calculate total price to pay
     const totalElement = document.getElementById(totalId).textContent;
     const total = parseFloat(totalElement.replace("$", ""));
     totalPriceToPay.push(total);
     console.log(totalPriceToPay)
    
    rowCounter++;
  }
  if (data.name === "supplement") {
    const rowId = `product-row-supp${rowSuppCounter}`;
    const quantityId = `quantity-supp${rowSuppCounter}`;
    const priceId = `price-supp${rowSuppCounter}`;
    const totalId = `total-price-supp${rowSuppCounter}`
    const row = document.createElement("tr");
    row.id = rowId;
    const tableData = document.createElement("td");
    const img = document.createElement("img");
    img.src = data.data.supplement_image;

    const productName = document.createElement("span");
    productName.textContent = data.data.supplement_name;

    const tableDataPrice = document.createElement("td");
    tableDataPrice.id = priceId;
    tableDataPrice.textContent = "$" + data.data.supplement_price;

    const tableDataButtons = document.createElement("td");
    const minusButton = document.createElement("button");
    const plusButton = document.createElement("button");

    minusButton.classList.add("quantity-btn-decrease");
    plusButton.classList.add("quantity-btn-increase");
    minusButton.textContent = "-";
    plusButton.textContent = "+";
    const totalData = document.createElement("td");
    totalData.id = totalId;
    totalData.textContent = "$" + data.data.supplement_price;
    const quantity = document.createElement("span");
    quantity.classList.add("quantity");
    quantity.id = quantityId;
    quantity.textContent = 1;
    plusButton.addEventListener("click", () => {
      const totalPriceElement = document.getElementById(totalId);
      const price = document.getElementById(priceId);

      const totalPriceElementValue = totalPriceElement.textContent;
      const priceValue = price.textContent;
      let totalPriceElementValueWithoutDollar = parseFloat(
        totalPriceElementValue.replace("$", "")
      );

      const totalPriceValue = parseFloat(priceValue.replace("$", ""));
      let totalPrice = totalPriceElementValueWithoutDollar;
      //  totalPrice += totalPriceValue;
      const totalValueEnd = totalPrice + totalPriceValue;
      console.log(totalValueEnd);
      totalPriceElement.textContent = "$" + totalValueEnd;

      //Handle Button Value Here
      const incButton = document.getElementById(quantityId);
      let buttonNumber = parseInt(incButton.textContent);
      const quantityValue = buttonNumber + 1;
      incButton.textContent = quantityValue;
    });

    //HANDLE DECREASE OF QUANTITY AND PRICE
    minusButton.addEventListener("click", () => {
      const incButton = document.getElementById(quantityId);
      let buttonNumber = parseInt(incButton.textContent);
      if (buttonNumber > 1) {
        const totalPriceElement = document.getElementById(totalId);
        const price = document.getElementById(priceId);

        const totalPriceElementValue = totalPriceElement.textContent;
        const priceValue = price.textContent;
        let totalPriceElementValueWithoutDollar = parseFloat(
          totalPriceElementValue.replace("$", "")
        );

        const totalPriceValue = parseFloat(priceValue.replace("$", ""));
        let totalPrice = totalPriceElementValueWithoutDollar;
        //  totalPrice += totalPriceValue;
        const totalValueEnd = totalPrice - totalPriceValue;
        console.log(totalValueEnd);
        totalPriceElement.textContent = "$" + totalValueEnd;

        //Handle Button Value Here

        const quantityValue = buttonNumber - 1;
        incButton.textContent = quantityValue;
      } else {
        let updatedCartData = cartData.filter((data) => {
          return data.name !== "supplement";
        });
        localStorage.setItem("productForCart", JSON.stringify(updatedCartData));
        const productRow = document.getElementById(rowId);
        productRow.innerHTML = "";
      }
    });

    tableDataButtons.appendChild(minusButton);
    tableDataButtons.appendChild(quantity);
    tableDataButtons.appendChild(plusButton);

    tableData.appendChild(img);
    tableData.appendChild(productName);
    row.appendChild(tableData);
    row.appendChild(tableDataPrice);
    row.appendChild(tableDataButtons);
    row.appendChild(totalData);
    tBody.appendChild(row);

    const totalElement = document.getElementById(totalId).textContent;
    const total = parseFloat(totalElement.replace("$", ""));
    totalPriceToPay.push(total);
    rowSuppCounter ++
  }
  if (data.name === "equipment") {
    
    const rowId = `product-row-equip${rowEquipCounter}`;
    const quantityId = `quantity-equip${rowEquipCounter}`;
    const priceId = `price-equp${rowEquipCounter}`;
    const totalId = `total-price-equip${rowEquipCounter}`
    const row = document.createElement("tr");
    row.id = rowId;
    const tableData = document.createElement("td");
    const img = document.createElement("img");
    img.src = data.data.equipment_image;

    const productName = document.createElement("span");
    productName.textContent = data.data.equipment_name;

    const tableDataPrice = document.createElement("td");
    tableDataPrice.id = priceId;
    tableDataPrice.textContent = "$" + data.data.equipment_price;

    const tableDataButtons = document.createElement("td");
    const quantity = document.createElement("span");
    quantity.classList.add("quantity");
    quantity.textContent = 1;
    quantity.id = quantityId;
    const totalData = document.createElement("td");
    totalData.textContent = "$" + data.data.equipment_price;
    totalData.id = totalId;
    const minusButton = document.createElement("button");
    const plusButton = document.createElement("button");
    minusButton.classList.add("quantity-btn-decrease");
    plusButton.classList.add("quantity-btn-increase");
    minusButton.textContent = "-";
    plusButton.textContent = "+";
    plusButton.addEventListener("click", () => {
      const totalPriceElement = document.getElementById(totalId);
      const price = document.getElementById(priceId);

      const totalPriceElementValue = totalPriceElement.textContent;
      const priceValue = price.textContent;
      let totalPriceElementValueWithoutDollar = parseFloat(
        totalPriceElementValue.replace("$", "")
      );

      const totalPriceValue = parseFloat(priceValue.replace("$", ""));
      let totalPrice = totalPriceElementValueWithoutDollar;
      //  totalPrice += totalPriceValue;
      const totalValueEnd = totalPrice + totalPriceValue;
      console.log(totalValueEnd);
      totalPriceElement.textContent = "$" + totalValueEnd;

      //Handle Button Value Here
      const incButton = document.getElementById(quantityId);
      let buttonNumber = parseInt(incButton.textContent);
      const quantityValue = buttonNumber + 1;
      incButton.textContent = quantityValue;
    });

    //HANDLE DECREASE OF QUANTITY AND PRICE
    minusButton.addEventListener("click", () => {
      const incButton = document.getElementById(quantityId);
      let buttonNumber = parseInt(incButton.textContent);
      if (buttonNumber > 1) {
        const totalPriceElement = document.getElementById(totalId);
        const price = document.getElementById(priceId);

        const totalPriceElementValue = totalPriceElement.textContent;
        const priceValue = price.textContent;
        let totalPriceElementValueWithoutDollar = parseFloat(
          totalPriceElementValue.replace("$", "")
        );

        const totalPriceValue = parseFloat(priceValue.replace("$", ""));
        let totalPrice = totalPriceElementValueWithoutDollar;
        //  totalPrice += totalPriceValue;
        const totalValueEnd = totalPrice - totalPriceValue;
        console.log(totalValueEnd);
        totalPriceElement.textContent = "$" + totalValueEnd;

        //Handle Button Value Here

        const quantityValue = buttonNumber - 1;
        incButton.textContent = quantityValue;
      } else {
        let updatedCartData = cartData.filter((data) => {
          return data.name !== "equipment";
        });
        localStorage.setItem("productForCart", JSON.stringify(updatedCartData));
        const productRow = document.getElementById(rowId);
        productRow.innerHTML = "";
      }
    });

    tableDataButtons.appendChild(minusButton);
    tableDataButtons.appendChild(quantity);
    tableDataButtons.appendChild(plusButton);

    tableData.appendChild(img);
    tableData.appendChild(productName);
    row.appendChild(tableData);
    row.appendChild(tableDataPrice);
    row.appendChild(tableDataButtons);
    row.appendChild(totalData);
    tBody.appendChild(row);

    const totalElement = document.getElementById(totalId).textContent;
    const total = parseFloat(totalElement.replace("$", ""));
    totalPriceToPay.push(total);
    console.log(totalPriceToPay)
    rowEquipCounter++
  }

const sumToPay = totalPriceToPay.reduce((acc, curr) => acc + curr, 0);
console.log(sumToPay);
  const totalToPay = document.getElementById("total-to-pay");
  totalToPay.textContent = "$" + sumToPay;

 
});
