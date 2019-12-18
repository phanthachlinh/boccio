export default ()=>{
  if(document.querySelector('#greetings')&&document.querySelector('#affectation'))
  [...document.querySelectorAll('#affectation fieldset p')].map(el=>{
    if(el.querySelector('input[type="text"]')){
      el.querySelector('input[type="text"]').placeholder = el.querySelector('label').childNodes[0].nodeValue.replace(":", "");
      el.querySelector('label').childNodes[0].nodeValue = '';
      el.querySelector('label .help').remove();
    };
    if(el.querySelector('input[type="checkbox"]')){
      el.querySelector('input[type="checkbox"]').insertAdjacentHTML('afterend','<span class="checkmark"></span>')
      el.querySelector('label').classList.add('afftection__checkbox_wrapper')

    }
  })
}
