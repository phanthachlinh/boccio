import {step1FadeInValidation,step2FadeInValidation} from './fadeInValidation'
export default ()=>{
  if(!document.querySelector('#greetings')){
  [...document.getElementsByClassName('step-container')].map(el=>{
    if(el.parentElement.id !== 'step-1')
      el.insertAdjacentHTML('beforeBegin','<div class="form__step_underlay"></div>');
  })
  fadeInFormSectionEvListener()
}
}
function fadeInFormSectionEvListener(){
  [...document.querySelectorAll('input:not([autocomplete="section-famount"])')].map(el=>{
    console.log(el);
    el.addEventListener('change',ev=>{
      fadeInLogic(ev)
    })
  });
  [...document.querySelectorAll('input[autocomplete="section-famount"]')].map(el=>{
    console.log(el);
    el.addEventListener('input',ev=>{
      fadeInLogic(ev)
    })
  });
}
function fadeInStep(num){
  document.querySelector('#step-'+num+' .step-container').classList.add('step-visible')

/*  [...document.querySelectorAll('[id^="step-"]')].map(el=>{
    el.addEventListener('click',ev=>{
      let parentEl = getParentElement(ev.path || (ev.composedPath && ev.composedPath()));
      for(let i = parseInt(parentEl.parentElement.id.split('-')[1])+1;i<4;i++){
        document.querySelector('#step-'+i+'>.step-container').classList.remove('step-visible');
      }
      parentEl.classList.add('step-visible')
    })
  })*/
}
function fadeInLogic(ev){
  console.log('fadeIn');
  if(window.innerWidth >=1024)
    switch (getParentElement(window.navigator.userAgent.indexOf("Edge") == -1?ev.composedPath():edgeGetComposedPath(ev.target)).id){
      case 'step-1':
        if(step1FadeInValidation())
          fadeInStep(2);
        break;
      case 'step-2':
        if(step2FadeInValidation())

          fadeInStep(3);
        break;
    }
}
function getParentElement(clickEvPath){
  for(let i = 0; i<clickEvPath.length;i++){
    if(clickEvPath[i].id&& clickEvPath[i].id.includes('step-'))
      return clickEvPath[i];
  }
}
function edgeGetComposedPath(element){
  let parents = [];

do{
    if(parents.length ==0)
      parents.push(element);
    else
      parents.push(parents[parents.length-1].parentElement)
  }while(parents[parents.length-1].parentElement.parentElement !== null)
  return parents;
  //base case

}
