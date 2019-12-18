export default ()=>{
 [...document.querySelectorAll('input[id^="famount-"]')].map(el=>{
    el.addEventListener('input',ev=>{
      document.querySelector('.value_of_amount-active')?
        document.querySelector('.value_of_amount-active').classList.remove('value_of_amount-active'):
        '';
        console.log('remove');
    })
  })
}
