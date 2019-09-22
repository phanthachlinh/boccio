import React from 'react';
export default ()=>{

  [...document.querySelectorAll('span[id^="value_of_amount-"]')].map((el)=>{

    el.parentElement.appendChild(getCheckmark());
  })
}
function getCheckmark(){
  let checkmarkNode = document.createElement('div');
  checkmarkNode.classList.add('checkmark');
  return checkmarkNode;
}
