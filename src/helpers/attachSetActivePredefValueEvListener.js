export default ()=>{
  [...document.querySelectorAll('span[id^="value_of_amount"]')].map(el=>{
    el.addEventListener('click',ev=>{
      console.log(ev)
      if(document.querySelector('.value_of_amount-active'))
        document.querySelector('.value_of_amount-active').classList.remove('value_of_amount-active');
      ev.currentTarget.classList.add('value_of_amount-active');

    })
  })
}
