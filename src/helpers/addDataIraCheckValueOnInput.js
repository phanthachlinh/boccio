export default()=>{
  [...document.querySelectorAll('input[name^="reserved_"]:not([type="hidden"])')].map(el=>{
    if(el.type == 'checkbox')
    el.addEventListener('change',ev=>{
        console.log('input')

        if(ev.target.getAttribute('data-ira-check') == '1'){
          ev.target.setAttribute('data-ira-check',0);
          ev.target.checked = false
        }else{
          ev.target.setAttribute('data-ira-check',1);
          ev.target.checked = true
        }
    })
  })
}
