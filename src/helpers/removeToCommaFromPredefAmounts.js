import React from 'react';
export default ()=>{

  [...document.querySelectorAll('span[id^="value_of_amount-"]')].map((el)=>{

    el.innerText = el.innerText.replace(",", "");
  })
}
