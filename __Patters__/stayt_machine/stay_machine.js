
const bmi = (w,h) => {
  var res = 'Obese';
  var bmi = w / h ** 2;

  var coefficient = [18.5, 25, 30];
  var categories  = ['Underweight', 'Normal', 'Overweight'];

  return (categories[coefficient.findIndex(el => el >= bmi)] || res);
}

