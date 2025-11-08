//1 meter = 3.281 feet
//1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound


const inputFld = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const lengthOut = document.getElementById("length-out")
const volumeOut = document.getElementById("volume-out")
const massOut = document.getElementById("mass-out")


convertBtn.addEventListener("click", function(){
    const inputValue = Number(inputFld.value)
    if (!inputValue){
        alert("Enter A valid positive number!")
        return
    } else {
        lengthStr = `<p>${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue /3.281).toFixed(3)} meters</</p>`
        lengthOut.innerHTML = lengthStr
        volumeStr = `<p>${inputValue} liter = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters</p>`
        volumeOut.innerHTML = volumeStr
        massStr = `<p>${inputValue} kilogram = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilograms</p>`
        massOut.innerHTML = massStr

    }
})