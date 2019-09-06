export default ()=>{
  [...document.querySelectorAll('input[name^="reserved_privacy"][type="checkbox"]')].map(el=>{
    el.insertAdjacentHTML('afterend','<span class="checkbox__checkmark"></span>');
  });
  editLabelId();
}
function editLabelId(){
  [...document.querySelectorAll('label[for^="reserved_privacy"]')].map(el=>{
    el.querySelector('input[type="checkbox"]').setAttribute('id',el.getAttribute('for')) ;
  })
}
