export default ()=>{
  [...document.querySelectorAll('input[type=date]')].map(el=>{
    el.id = el.parentElement.getAttribute('name')
  })
}
