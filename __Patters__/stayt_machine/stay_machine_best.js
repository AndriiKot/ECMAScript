
js function bmi(weight, height) {
     const bmi = weight / (height*height);
      const conditionsArray = [
        (bmi) => bmi <= 18.5 && "Underweight",
        (bmi) => bmi <= 25.0 && "Normal",
        (bmi) => bmi <= 30.0 && "Overweight",
        (bmi) => bmi > 30.0 && "Obese",
      ]; 
    
      return conditionsArray.reduce((evaluation, condition) => {

       const localRes = condition(bmi);

       return  evaluation === '' && localRes || evaluation
      }, '');
}
