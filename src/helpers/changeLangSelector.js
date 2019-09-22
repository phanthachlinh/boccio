import React from 'react';
import ReactDOMServer from 'react-dom/server';
export default ()=>{
  let childNodes = [...document.querySelector('#lang > p').childNodes];
  let LangTitle;
  let LangOptions = []
  childNodes.map(el=>{
    if(childNodes.indexOf(el) == 0){
      LangTitle = <p key={1} id='langTitle'>{el.nodeValue}</p>;

    }else if(el.nodeName == 'A'){
      LangOptions.push(<option key={2} value={el.href?el.href:''} selected={el.classList.contains('current')?'selected':''}>{el.innerText}</option>);
    }
  })
 if(!document.getElementById('header_wrapinner'))
   return;
  document.getElementById('header_wrapinner').insertAdjacentHTML('beforeEnd', ReactDOMServer.renderToStaticMarkup(getNewLangSelector(LangTitle,LangOptions)));
  addLangSelectorEventListener();
 document.getElementById('lang').remove()
}
function addLangSelectorEventListener(){
  document.getElementById('langSelector').addEventListener('change',ev=>{
    if(ev.target.value){
      window.location.href=ev.target.value
    }

  })
}
function getNewLangSelector(titleJsx, optionsJsx){
  return(
    <div id="langSelector">
      {titleJsx}
      <select>
        {optionsJsx}
      </select>
    </div>
  )
}
