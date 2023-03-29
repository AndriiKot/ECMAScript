const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(item => item.addEventListener('whell',inputWheel));

function inputWheel(event){
  event.preventDefault();
   if (this.getAttribute('step')) {
    let step = +this.getAttribute('step');
   }
   else {
    step = 1
   };
   if (event.deltaY > 0){
    this.value = (+this.value) + step;
   }
   else {
    this.value = (+this.value) - step;
   }
}

