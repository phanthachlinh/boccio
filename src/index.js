import React from 'react';
import ReactDOM from 'react-dom'
import DonationsTypeChooser from './components/DonationsTypeChooser'
import addCheckmarkToPredefAmounts from './helpers/addCheckmarkToPredefAmounts'
import attachSetActivePredefValueEvListener from './helpers/attachSetActivePredefValueEvListener'
import editFreeAmountSection from './helpers/editFreeAmountSection'
import removeStep2help from './helpers/removeStep2help';
import wrapStep2CheckboxText from './helpers/wrapStep2CheckboxText'
import editBankMonthList from './helpers/editBankMonthList'
import step3GeneralEdit from './helpers/step3GeneralEdit'
import paymentMethodExpandButton from './components/paymentMethodExpandButton';
import footerEdit from './helpers/footerEdit'
import addEmailIcon from './helpers/addEmailIcon'
import removeLangText from './helpers/removeLangText'
import editLangListFunctionality from './helpers/editLangListFunctionality'
import renderCardTypes from './components/CardTypes'
import renderCheckBox from './components/CheckBox';
import editSteptitle from './helpers/editStepTitle';
import editGestPayInputNames from './helpers/editGestPayInputNames';
import detectMandatory from './helpers/detectMandatory';
import setCardPaymentMethodOpenDefault from './helpers/setCardPaymentMethodOpenDefault';
import commonCheckInputOverride from './helpers/commonCheckInputOverride';
import changeLangSelector from './helpers/changeLangSelector';
import addBlackUnderlays from './helpers/addBlackUnderlays';
import addOptionalLinkToPrivacy from './helpers/addOptionalLinkToPrivacy';
import birthdateHasValueEvListener from './helpers/birthdateHasValueEvListener';
import addIdToDateInputs from './helpers/addIdToDateInputs';
import setRequiredPropToInputs from './helpers/setRequiredPropToInputs';
import addDataIraCheckValueOnInput from './helpers/addDataIraCheckValueOnInput';
import removeSpaceFromValueOfAmount from './helpers/removeSpaceFromValueOfAmount';
window.onload = ()=>{
  if(document.querySelector('#step-1 .bloc'))
    document.querySelector('#step-1 .bloc').insertAdjacentHTML('beforeBegin','<div class="donations-type-wrapper"></div>');
  setCardPaymentMethodOpenDefault();
  attachSetActivePredefValueEvListener();
  editFreeAmountSection();
  addIdToDateInputs();
  removeStep2help('email','firstname','lastname', 'address1','reserved_birthdate');
//  wrapStep2CheckboxText();
  editBankMonthList();
  step3GeneralEdit();
  paymentMethodExpandButton();
  footerEdit();
  addEmailIcon();
  renderCardTypes();
 renderCheckBox();
 removeLangText();
//  editLangListFunctionality();
  editSteptitle();
changeLangSelector();
capitalizeDonationTargetLabel()
addDataIraCheckValueOnInput();
detectMandatory();
editGestPayInputNames();
commonCheckInputOverride();
birthdateHasValueEvListener();
removeSpaceFromValueOfAmount();
addBlackUnderlays();
addOptionalLinkToPrivacy();

//setRequiredPropToInputs();
  if(typeof document.getElementsByClassName('donations-type-wrapper')[0] !=='undefined')
  ReactDOM.render(<DonationsTypeChooser />, document.getElementsByClassName('donations-type-wrapper')[0]);

}
function capitalizeDonationTargetLabel(){
  if(!document.querySelector('label[for="reserved_affectation"]'))
  return;
  document.querySelector('label[for="reserved_affectation"]').innerText = document.querySelector('label[for="reserved_affectation"]').innerText.toUpperCase();
}
