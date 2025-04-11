
function bmi(weight, height) {
    const bmi = weight / (height * height);

    var values = ["Underweight", "Normal", "Overweight", "Obese"];
    var conds = [bmi <= 18.5, bmi <= 25.0, bmi <= 30.0, true];
    var index = conds.findIndex(Boolean);

    return values[index];
}
