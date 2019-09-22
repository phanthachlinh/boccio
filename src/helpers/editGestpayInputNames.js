export default ()=>{
  if(false){
    let cardPaymentElement = document.getElementById('payment_mode-card');
    cardPaymentElement.querySelector('[name="cardNumber"]').id = 'cardnumber';
    cardPaymentElement.querySelector('[name="scode"]').id = 'scode';
    cardPaymentElement.querySelector('[name="cardyear"]').id = 'cardyear';
    cardPaymentElement.querySelector('[name="cardmonth"]').id = 'cardmonth';
  }
}
