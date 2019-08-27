export default ()=>{
  [...document.querySelectorAll('#step-2 label[for^="reserved_"]')].map(el=>{
    let wrapper = '<div class="checkbox__text">';
    wrapper += el.childNodes[4].textContent;
    el.childNodes[4].remove()
    if(el.querySelector('.help')){
      wrapper+=el.querySelector('.help').outerHTML;
      el.querySelector('.help').remove()
    }
    console.log(wrapper);
    wrapper+='</div>';
    el.insertAdjacentHTML('beforeend',wrapper)
    let requiredElement = el.querySelector('.required');
    if(requiredElement){
      el.insertAdjacentHTML('beforeend',requiredElement.outerHTML);
      el.querySelector('.required').remove()
    }
  })
}
