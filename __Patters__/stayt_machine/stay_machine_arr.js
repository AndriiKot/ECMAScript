
const bmi = (weight, height) =>
    [
        [bmi => bmi <= 18.5, "Underweight"],
        [bmi => bmi <= 25.0, "Normal"],
        [bmi => bmi <= 30.0, "Overweight"],
        [() => true, "Obese"]
    ].find(
        ([pred]) => pred((weight / (height * height)))
    )[1];
