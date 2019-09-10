export default ()=>{
  [...document.querySelectorAll('input[name^="reserved_privacy"][type="checkbox"]')].map(el=>{
    el.insertAdjacentHTML('afterend','<span class="checkbox__checkmark"></span>');
  });
  editLabelId();
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
      console.log(ev.currentTarget)
      let hiddenInput = ev.currentTarget.querySelector('input[type="checkbox"]')
      if(hiddenInput.checked)
        hiddenInput.checked=false;
      else
        hiddenInput.checked=true;
    })
  })
}
