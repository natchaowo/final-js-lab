
// ---------------------
// 1 Tax Calculator
// ---------------------

function calculateTax(){

let income = Number(document.getElementById("income").value)

let taxRate = 0

if(income <= 150000){
taxRate = 0
}
else if(income <= 300000){
taxRate = 0.05
}
else if(income <= 500000){
taxRate = 0.10
}
else{
taxRate = 0.15
}

let tax = income * taxRate
let net = income - tax

document.getElementById("taxResult").innerHTML =
"Tax: " + tax.toFixed(2) + " บาท<br>Net Income: " + net.toFixed(2) + " บาท"

}



// ---------------------
// 2 Inventory System
// ---------------------

let products = [

{id: "P001", name:"Keyboard", price:500, stock:10},

{id: "P002", name:"Mouse", price:300, stock:15},

{id: "P003", name:"Monitor", price:4000, stock:5}

]


function displayProducts(){

let table = document.getElementById("stockTable")

table.innerHTML = ""

products.forEach(p => {

table.innerHTML += `
<tr>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.price}</td>
<td>${p.stock}</td>
</tr>
`

})

}

displayProducts()


function buyProduct(){

let id = document.getElementById("productId").value

let qty = Number(document.getElementById("quantity").value)

let product = products.find(p => p.id === id)

if(!product){
alert("ไม่พบสินค้า")
return
}

if(product.stock >= qty){

product.stock -= qty

let total = qty * product.price

document.getElementById("totalPrice").innerText =
"Total Price: " + total + " บาท"

displayProducts()

}
else{

alert("สินค้าไม่เพียงพอ")

}

}



// ---------------------
// 3 Currency Converter
// ---------------------

async function convertCurrency(){

let usd = Number(document.getElementById("usdPrice").value)

let url = "https://api.exchangerate-api.com/v4/latest/USD"

let response = await fetch(url)

let data = await response.json()

let rate = data.rates.THB

let thb = usd * rate

let fee = thb * 0.03

let finalPrice = thb + fee

document.getElementById("currencyResult").innerHTML =
"Rate: " + rate + "<br>" +
"Price in THB: " + finalPrice.toFixed(2)

}