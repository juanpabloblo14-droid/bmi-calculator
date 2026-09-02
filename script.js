//DOM ELEMENTS
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const bmiResult = document.getElementById('bmiResult');
const bmiCategory = document.getElementById('bmiCategory');

//BUTTON EVENTLISTENER 
calculateBtn.addEventListener("click", calculateBody);

//CALCULATOR FUNCTION 
function calculateBody() {
    let bodyWeight = Number(weightInput.value);
    let parts = heightInput.value.split("'");
    let feet = Number(parts[0]);
    let inches = Number(parts[1])
    let heightInInches = (feet * 12) + inches;
    let bmi = (bodyWeight / (heightInInches * heightInInches)) * 703;
    bmiResult.textContent = bmi.toFixed(1);
    if (bmi < 18.5) {
        bmiCategory.textContent = "Underweight";
    } else if (bmi < 25) {
        bmiCategory.textContent = "Normal weight";
    } else if (bmi < 30) {
        bmiCategory.textContent = "Overweight";
    } else {
        bmiCategory.textContent = "obese";
    }
}



