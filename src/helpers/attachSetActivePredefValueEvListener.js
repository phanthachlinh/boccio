export default ()=>{
 [...document.querySelectorAll('span[id^="value_of_amount"]')].map(el=>{
    el.addEventListener('click',ev=>{
      if(document.querySelector('.value_of_amount-active'))
        document.querySelector('.value_of_amount-active').classList.remove('value_of_amount-active');
      ev.currentTarget.classList.add('value_of_amount-active');
  /*    window.Step1.set_donation({
        amount:ev.target.id.split('-')[2],
        frequency: ev.target.id.split('-')[1]
      });*/
    })
  })
}
