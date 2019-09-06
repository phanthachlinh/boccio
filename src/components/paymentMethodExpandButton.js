import React from 'react';
import jsxToString from 'jsx-to-string';
import ReactDOMServer from 'react-dom/server';
import renderCardTypes from './CardTypes';
export default ()=>{
  addButtons();
  addEventListenersToButtons();
  newPaymentMethodRenderedObserver();
  editInputPlaceholder();
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
    el.insertAdjacentHTML('afterbegin',ReactDOMServer.renderToStaticMarkup(<PaymentMethodButton title={el.id.split('-')[1]}/>))
    //  el.prependHTML(jsxToString(<PaymentMethodButton />))
  });
}
function PaymentMethodButton(props){
  return(
    <div className="payment__method_button">
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
  [...document.querySelectorAll('input[name="CVV2"]')].map(el=>{
    el.placeholder = "CVV2"
  });
  [...document.querySelectorAll('select[name="expMonth"]')].map(el=>{
      el.querySelector('option').innerText = "Month";
  });

  [...document.querySelectorAll('select[name="expYear"]')].map(el=>{
    el.querySelector('option').innerText = "Year";
  });

}

function newPaymentMethodRenderedObserver(){
  const targetNode = document.getElementsByClassName('payment')[0];

// Options for the observer (which mutations to observe)
  const config = { childList: true};

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      console.log(mutation)
        if (mutation.type === 'childList'&&mutation.removedNodes.length!=0&&!document.querySelector('div[class="payment"] .payment__method_button')) {
            addButtons();
            renderCardTypes();
            addEventListenersToButtons();
            editInputPlaceholder();
            changeExpYearText()
        }

    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
}
