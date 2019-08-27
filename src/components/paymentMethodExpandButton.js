import React from 'react';
import jsxToString from 'jsx-to-string';
import ReactDOMServer from 'react-dom/server'
export default ()=>{
  addButtons();
  [...document.querySelectorAll('.payment__method_button')].map(el=>{
    el.addEventListener('click',ev=>{
      console.log('sdfsfd')
      let paymentBody = ev.target.parentElement.querySelector('.payment_body');
      if(document.querySelector('.payment_body-visible'));
        [...document.querySelectorAll('.payment_body-visible')].map(el=>el.classList.remove('payment_body-visible'))
      paymentBody.classList.add('payment_body-visible')
    })
  })
  newPaymentMethodRenderedObserver()
}
function addButtons(){
  [...document.querySelectorAll('fieldset[id^="payment_mode-"]')].map(el=>{
    console.log(el.id.split('-')[1])
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
function newPaymentMethodRenderedObserver(){
  const targetNode = document.getElementsByClassName('payment')[0];

// Options for the observer (which mutations to observe)
  const config = { childList: true};

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      console.log(mutation)
        if (mutation.type === 'childList'&&mutation.removedNodes.length!=0&&!document.querySelector('div[class="payment"] .payment__method_button')) {
            addButtons()
        }

    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
}
