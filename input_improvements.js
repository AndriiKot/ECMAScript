const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(item => item.addEventListener('whell',inputWheel));

function inputWheel(event){
  event.preventDefault();
   if (event.deltaY > 0) {
    this.value = (+this.value) + 1;
   }
   else {
    this.value = (+this.value) - 1;
   }
}

