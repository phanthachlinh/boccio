import React from 'react';
import jsxToString from 'jsx-to-string';
import ReactDOMServer from 'react-dom/server';
import renderCardTypes from './CardTypes';
export default ()=>{
  if(!document.querySelectorAll('.payment__method_button'))
    return;
    if(document.getElementsByClassName('payment').length == 0)
      return;
  addButtons();
  addEventListenersToButtons();
  newPaymentMethodRenderedObserver();
  editInputPlaceholder();
  setCardPaymentAsOpen()
}
function addEventListenersToButtons(){
  [...document.querySelectorAll('.payment__method_button')].map(el=>{
    el.addEventListener('click',ev=>{
      if(document.querySelector('.payment__method_button-active'))
        document.querySelector('.payment__method_button-active').classList.remove('payment__method_button-active');
      event.target.classList.add('payment__method_button-active');
      let paymentBody = ev.target.parentElement.querySelector('.payment_body');
      if(document.querySelector('.payment_body-visible'));
        [...document.querySelectorAll('.payment_body-visible')].map(el=>el.classList.remove('payment_body-visible'))
      paymentBody.classList.add('payment_body-visible')
    })
  })
}
function addButtons(){
  [...document.querySelectorAll('fieldset[id^="payment_mode-"]')].map(el=>{
    el.key = el.id;
    el.insertAdjacentHTML('afterbegin',ReactDOMServer.renderToStaticMarkup(<PaymentMethodButton active={el.id == 'payment_mode-card'?true:false} title={el.id.split('-')[1]}/>))
    //  el.prependHTML(jsxToString(<PaymentMethodButton />))
  });
}
function PaymentMethodButton(props){
  return(
    <div className={"payment__method_button "+(props.active?'payment__method_button-active':'')}>
      {props.title}
    </div>
  )
}
function changeExpYearText(){
  [...document.querySelectorAll('#expMonth')].map(el=>{
    [...el.querySelectorAll('option')].map(el=>{
      let newValue = el.innerText.split(' /');

      if(newValue.length == 2){
        el.innerText = newValue[0];
      }
    })
  })
}
//edits plaholders in payment method
function editInputPlaceholder(){

  [...document.querySelectorAll('input[id="CVV2"]')].map(el=>{
    el.placeholder = "CVV2";
    el.name = "scode";
    el.id = "scode";
  });
  [...document.querySelectorAll('select[id="expMonth"]')].map(el=>{
      el.querySelector('option').innerText = "Month";
      el.name = "cardmonth";
  });

  [...document.querySelectorAll('select[id="expYear"]')].map(el=>{
    el.querySelector('option').innerText = "Year";
    el.name = "cardyear";
  });
  [...document.querySelectorAll('input[name="cardNumber"]')].map(el=>{
    el.id = "cardnumber";
      el.placeholder = el.parentElement.querySelector('label[for="cardNumber"]').innerText
  });

}
function setCardPaymentAsOpen(){
  document.querySelector('#payment_mode-card .payment_body').classList.add('payment_body-visible');
}

function newPaymentMethodRenderedObserver(){

  const targetNode = document.getElementsByClassName('payment')[0];

// Options for the observer (which mutations to observe)
  const config = { childList: true};

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList'&&mutation.removedNodes.length!=0&&!document.querySelector('div[class="payment"] .payment__method_button')) {
            addButtons();
            renderCardTypes();
            addEventListenersToButtons();
            changeExpYearText();
            setCardPaymentAsOpen()
            editInputPlaceholder();
        }else if (mutation.type === 'childList'&&mutation.removedNodes.length!=0)
          editInputPlaceholder();
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
}
