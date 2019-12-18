export default ()=>{
  if(document.querySelector('#type-b')&&!document.querySelector('#greetings')){
  [...document.querySelectorAll('#step-2 input[type="checkbox"][id="iscompany"]')].map(el=>{
    el.parentElement.insertAdjacentHTML('beforeEnd','<div class="checkmark__radio-is-company"></div>')
  })
  resetCheckmarkCheckedValue();
}
}
function resetCheckmarkCheckedValue(){
  if(document.querySelector('input[name^="amount-"][checked="checked"]'))
    document.querySelector('input[name^="amount-"][checked="checked"]').checked=false
}
