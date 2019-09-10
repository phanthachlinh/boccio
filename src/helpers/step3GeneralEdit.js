export default ()=>{
  [...document.querySelectorAll('#security-info')].map(el=>{
    el.remove()
  });
  document.querySelector('#powered a img').style.display= "inline-block";
}
