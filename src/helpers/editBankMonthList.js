export default ()=>{

if(document.getElementById('stripe_submit')){

  [...document.querySelectorAll('#card-expiry span:first-child')].map(el=>{
    el.remove();
  });
  [...document.querySelectorAll('#cardnumber')].map(el=>{
    el.placeholder = document.querySelector('label[for="cardnumber"]').innerText
  });
  if(document.querySelector('#cardmonth option'))
    document.querySelector('#cardmonth option').innerText = 'MM';
  if(document.querySelector('#cardyear option'))
    document.querySelector('#cardyear option').innerText = 'YYYY';
  [...document.querySelectorAll('label[for="scode"]')].map(el=>{
    document.getElementById('scode').placeholder = el.innerText;
  });
/* [...document.querySelectorAll('#card-scode .help')].map(el=>{
    el.remove();
  });*/
}
if(document.getElementById('gestpay_submit')){
  [...document.querySelectorAll('#card-expiry span:first-child')].map(el=>{
  });
  [...document.querySelectorAll('#cardNumber')].map(el=>{
    el.placeholder = document.querySelector('label[for="cardNumber"]').innerText
  });
  [...document.querySelectorAll('#expMonth option')].map(el=>{
    if(el.value){
      el.innerText = el.innerText.split('/')[0];
    }
  });
  [...document.querySelectorAll('#card-scode label[for="CVV2"]')].map(el=>{
  });
/* [...document.querySelectorAll('#card-scode .help')].map(el=>{
    el.remove();
  });*/
  [...document.querySelectorAll('label[for="scode"]')].map(el=>{
    document.getElementById('scode').placeholder = el.innerText;
  });
}

}
