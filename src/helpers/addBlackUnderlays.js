import {step1FadeInValidation,step2FadeInValidation} from './fadeInValidation'
export default ()=>{
  [...document.getElementsByClassName('step-container')].map(el=>{
    if(el.parentElement.id !== 'step-1')
      el.insertAdjacentHTML('beforeBegin','<div class="form__step_underlay"></div>');
  })
  fadeInFormSectionEvListener()
}
function fadeInFormSectionEvListener(){
  [...document.querySelectorAll('input')].map(el=>{
    el.addEventListener('input',ev=>{
      if(window.innerWidth >=1024)
        switch (getParentElement(ev.composedPath()).id){
          case 'step-1':
            console.log(step1FadeInValidation());
            if(step1FadeInValidation())
              fadeInStep(2);
            break;
          case 'step-2':
            console.log(step2FadeInValidation())
            if(step2FadeInValidation())

              fadeInStep(3);
            break;
        }
    })
  })
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
function getParentElement(clickEvPath){
  for(let i = 0; i<clickEvPath.length;i++){
    if(clickEvPath[i].id&& clickEvPath[i].id.includes('step-'))
      return clickEvPath[i];
  }
}
