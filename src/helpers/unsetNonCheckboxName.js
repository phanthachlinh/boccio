export default ()=>{
  [...document.querySelectorAll('p[name^="reserved_privacy"], input[name^="reserved_privacy"][type="hidden"]')].map(el=>{
    el.name='';
  })
}
