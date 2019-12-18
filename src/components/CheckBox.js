export default ()=>{
  [...document.querySelectorAll('input[name^="reserved_privacy"][type="checkbox"]')].map(el=>{
    el.insertAdjacentHTML('afterend','<span class="checkbox__checkmark"></span>');
    el.value=0;
  });
  editLabelId();
  addCheckBoxRequiredToText();
  addCheckedAttrToHidden()
}
function editLabelId(){
  [...document.querySelectorAll('label[for^="reserved_privacy"]')].map(el=>{
    el.querySelector('input[type="checkbox"]').setAttribute('id',el.getAttribute('for')) ;
  })
}
function addCheckedAttrToHidden(){
  [...document.querySelectorAll('#step-2 label[for^="reserved_"]')].map(el=>{
    el.addEventListener('click',ev=>{
      if(ev.currentTarget.querySelector('[data-ira-check]')===null)
        return;
  
      let checkbox = ev.currentTarget.querySelector('[data-ira-check]');
      if(!checkbox)
        return;
      if(checkbox.getAttribute('data-ira-check')=='1'){
        checkbox.setAttribute('data-ira-check',0)
        checkbox.setAttribute('value',0)

      }else{
        checkbox.setAttribute('data-ira-check',1)
          checkbox.setAttribute('value',1)
      }
      let hiddenInput = ev.currentTarget.querySelector('input[type="checkbox"]')
      if(hiddenInput.checked)
        hiddenInput.checked=false;
      else{
        hiddenInput.checked=true;
        checkbox.classList.remove('error');
      }


    })
  })
}
function addCheckBoxRequiredToText(){
  [...document.querySelectorAll('label[for^="reserved_privacy"]')].map(el=>{
    if(el.getElementsByClassName('required')[0]){
      el.getElementsByClassName('help')[0].innerText +=' *';
      el.getElementsByClassName('required')[0].remove()
    }

  })
}
