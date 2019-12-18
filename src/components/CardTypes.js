import React from 'react';
import ReactDOMServer from 'react-dom/server';
export default ()=>{
  let cardTypes=[];
  cardTypes.push(getCardType('American express', 'amex'));
  cardTypes.push(getCardType('Visa', 'visa'));
  cardTypes.push(getCardType('Mastercard', 'mastercard'));
  let renderJSX = cardTypes.map(card=>{
    return <li data-value={card.shortname} key="card.shortname" className="card-type-item">
      <label>
        <input name="cardtype" id={card.shortname} value={card.shortname} type="radio" value={card.shortname} />
        <span className="checkmark"></span>
        <label htmlFor={card.shortname}>
          <img className="payment-type-icon" src={`https://libs.iraiser.eu/images/pictos/${card.shortname}-radius.png`} />
        </label>
      </label>
    </li>
  });
  [...document.querySelectorAll('#creditcard.payment_body')].map(el=>{
    el.insertAdjacentHTML('afterbegin', ReactDOMServer.renderToStaticMarkup(<ul className="card-types">{renderJSX}</ul>));
    //reinitilizing step 3
    Steps.init();
  });
//  renderCardPayment();
  //newPaymentMethodRenderedObserver();

};
function renderCardPayment(){
  let cardTypes=[];
  cardTypes.push(getCardType('American express', 'amex'));
  cardTypes.push(getCardType('Visa', 'visa'));
  cardTypes.push(getCardType('Mastercard', 'mastercard'));
  let renderJSX = cardTypes.map(card=>{
    return <li data-value={card.shortname} key="card.shortname" className="card-type-item">
      <label>
        <input name="cardtype" id={card.shortname} value={card.shortname} type="radio" value={card.shortname} />
        <span className="checkmark"></span>
        <label htmlFor={card.shortname}>
          <img className="payment-type-icon" src={`http://libs.iraiser.eu/images/pictos/${card.shortname}-radius.png`} />
        </label>
      </label>
    </li>
  });
  [...document.querySelectorAll('#creditcard.payment_body')].map(el=>{
    el.insertAdjacentHTML('afterbegin', ReactDOMServer.renderToStaticMarkup(<ul className="card-types">{renderJSX}</ul>));
    //reinitilizing step 3
    Steps.init();
  });
}
function getCardType(name,shortname){
  return {name,shortname}
}
function newPaymentMethodRenderedObserver(){
  const targetNode = document.getElementsByClassName('payment')[0]

// Options for the observer (which mutations to observe)
  const config = { childList: true};

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList'&&mutation.removedNodes.length==1) {
            renderCardPayment();
        }

    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
}
