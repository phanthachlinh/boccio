export default()=>{
  [...document.querySelectorAll('[data-required="1"]')].map(
    e=>{
      e.setAttribute('data-required','')
      e.setAttribute('data-ira-check',0);
    })
}
