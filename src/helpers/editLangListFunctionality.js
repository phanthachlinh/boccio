export default()=>{
  notOnClickEventListener();
  document.querySelector('.current').removeAttribute('href')
  document.querySelector('#lang p a.current').addEventListener('click',(ev)=>{
    if(document.querySelector('#lang').classList.contains('expanded'))
      collapseList();
    else{
      [...document.querySelectorAll('#lang a:not(.current)')].map(el=>{
        el.classList.add('lang__item-expanded');
        document.querySelector('#lang').classList.add('expanded');

      })
    }

  })

}
function notOnClickEventListener(){
  window.addEventListener('click',(ev)=>{
    let langWrapper = document.getElementById('lang');
    if(ev.path.indexOf(langWrapper) === -1&& langWrapper.classList.contains('expanded')){
      collapseList();
    }
  })
}
function collapseList(){
  [...document.querySelectorAll('#lang a:not(.current)')].map(el=>{
    el.classList.remove('lang__item-expanded');
  });
  document.querySelector('#lang').classList.remove('expanded');
}
