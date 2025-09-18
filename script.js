const weightE1 = document.getElementById('weight');
const heightE1 = document.getElementById('height');
const calc = document.getElementById('calculate');
const res = document.getElementById('result');



function calcBmi() {
    const weight = parseFloat(weightE1.value);
    const height = parseFloat(heightE1.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        res.innerText = "Please enter valid weight and height.";
        res.style.color = "red"
        res.style.fontWeight= "450"
        return;
    }

    let bmi = weight / Math.pow(height, 2);
    res.innerText = "Your BMI is : " + bmi.toFixed(2);
    res.style.color = "green"


    if (bmi < 18.5) {
        res.innerText += " (Underweight)";
        res.style.color = "blue";
        res.style.fontWeight = "bold";
    } else if (bmi < 25) {
        res.innerText += " (Normal)";
        res.style.color = "green";
        res.style.fontWeight = "bold";
    } else if (bmi < 30) {
        res.innerText += " (Overweight)";
        res.style.color = "orange";
        res.style.fontWeight = "bold";
    } else {
        res.innerText += " (Obesity)";
        res.style.color = "red";
        res.style.fontWeight = "bold";
    }
}
calc.addEventListener('click', calcBmi);
