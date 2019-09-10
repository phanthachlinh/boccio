import React from 'react';
import ReactDOMServer from 'react-dom/server';
export default ()=>{
  let cardTypes=[];
  cardTypes.push(getCardType('American express', 'amex'));
  cardTypes.push(getCardType('Visa', 'visa'));
  cardTypes.push(getCardType('Mastercard', 'mastercard'));
  console.log('rendering');
  let renderJSX = cardTypes.map(card=>{
    return <li data-value={card.shortname} key="card.shortname" className="card-type-item">
      <label>
        <input name="cardtype" id={card.shortname} value={card.shortname} type="radio" value={card.shortname} />
        <span className="checkmark"></span>
        <label for={card.shortname}>
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

};
function getCardType(name,shortname){
  return {name,shortname}
}
