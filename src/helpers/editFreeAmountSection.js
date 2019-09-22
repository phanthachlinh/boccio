export default ()=>{
  [...document.querySelectorAll("fieldset[class*='-amount'] label")].map(el=>{
    el.childNodes[3].placeholder = el.childNodes[0].textContent

    el.childNodes[0].remove()
  })
}
