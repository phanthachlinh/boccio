import React from 'react';
import ReactDOMServer from 'react-dom/server';
export default ()=>{
  [...document.querySelectorAll('p[name^="reserved_privacy"]')].map(el=>{
    if(el.getAttribute('data-target-text')&&el.getAttribute('data-target-link')){
       el.querySelector('label').insertAdjacentHTML('beforeEnd', getLinkTemplate(el.getAttribute('data-target-link'),el.getAttribute('data-target-text')))
    }
  })
//  addReservedLinkEventListener();
}
function getLinkTemplate(link, text){
  return `<a class="reserved__privacy_link" href="${link}" target="_blank">${text}</a>`
}
function addReservedLinkEventListener(){
  [...document.querySelectorAll('.reserved__privacy_link')].map(el=>{
    el.addEventListener('click',(ev)=>{
      window.open(ev.target.getAttribute('href'))
    })
  })
}
