export default ()=>{
  document.querySelector('#lang p').childNodes[0].remove();
  [...document.querySelectorAll('#lang p span')].map(el=>{
    el.remove();
  });

}
