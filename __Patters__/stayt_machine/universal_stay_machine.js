
function bmi(weight, height) {
    const bmi = weight / (height * height);

    const values = [
        { min: -Infinity, max: 18.5, value: "Underweight" },
        { min: 18.5, max: 25.0, value: "Normal" },
        { min: 25.0, max: 30.0, value: "Overweight" },
        { min: 30.0, max: Infinity, value: "Obese" },
    ];

    return values.find(({ min, max }) => bmi > min && bmi <= max).value;
}

