export default ()=>{
[...document.querySelectorAll('[data-required]')].map(el=>{
    el.required=true;
  })
}
