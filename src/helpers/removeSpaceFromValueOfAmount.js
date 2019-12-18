export default()=>{
  [...document.querySelectorAll('[id^="value_of_amount-"]')].map(el=>{
    el.innerText = el.innerText.replace(/\s/g,'')
  })
}
