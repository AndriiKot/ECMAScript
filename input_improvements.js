const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(item => item.addEventListener('whell',inputWheel));

function inputWheel(event){
  event.preventDefault();
}