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
import setCardPaymentMethodOpenDefault from './helpers/setCardPaymentMethodOpenDefault';
import changeLangSelector from './helpers/changeLangSelector';
window.onload = ()=>{
  let donationTypeChooserWrapper = document.createElement('div');
  donationTypeChooserWrapper.classList.add('donations-type-wrapper');
  document.querySelector('#step-1 .height_adaptor').prepend(donationTypeChooserWrapper);
  setCardPaymentMethodOpenDefault();
  attachSetActivePredefValueEvListener();
  editFreeAmountSection();
  removeStep2help('email','firstname','lastname', 'address1','reserved_birthdate');
  wrapStep2CheckboxText();
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
  console.log('attached')
  ReactDOM.render(<DonationsTypeChooser />, donationTypeChooserWrapper);

}
function capitalizeDonationTargetLabel(){
  document.querySelector('label[for="reserved_affectation"]').innerText = document.querySelector('label[for="reserved_affectation"]').innerText.toUpperCase();
}
