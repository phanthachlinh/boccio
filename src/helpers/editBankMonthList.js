export default ()=>{
  [...document.querySelectorAll('#card-expiry span:first-child')].map(el=>{
    el.remove();
  });
  [...document.querySelectorAll('#expMonth option')].map(el=>{
    if(el.value){
      el.innerText = el.innerText.split('/')[0];
    }
  });
  [...document.querySelectorAll('#card-scode label[for="CVV2"]')].map(el=>{
    el.remove();
  });
  [...document.querySelectorAll('#card-scode .help')].map(el=>{
    el.remove();
  });
}
