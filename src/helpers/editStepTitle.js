export default ()=>{
  [...document.querySelectorAll('.step-title>h2')].map(el=>{
      el.innerText = el.innerText.toUpperCase();
    })
}
