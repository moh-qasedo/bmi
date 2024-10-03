document.getElementById("calculate").onclick = function () {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters
  var bmi = weight / (height * height);

  var resultText = "Your BMI is " + bmi.toFixed(2) + ". ";

  if (bmi < 18.5) {
    resultText += "You are underweight.";
  } else if (bmi < 24.9) {
    resultText += "You have a normal weight.";
  } else if (bmi < 29.9) {
    resultText += "You are overweight.";
  } else {
    resultText += "You are obese.";
  }

  document.getElementById("result").innerText = resultText;
};
