//DOM ELEMENTS
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const bmiResult = document.getElementById('bmiResult');
const bmiCategory = document.getElementById('bmiCategory');

//BUTTON EVENTLISTENER 
calculateBtn.addEventListener("click", calculateBody);

//CALCULATOR FUNCTION 
function calculateBody(){
    let bodyWeight = Number(weightInput.value);
    let bodyHeight = Number(heightInput.value);
    let heightInInches = bodyHeight * 12;
    let bmi = (bodyWeight / (heightInInches * heightInInches)) * 703;
    bmiResult.textContent = bmi;
}



