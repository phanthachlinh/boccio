export default ()=>{
  let footerInfoString = '<div class="footer-info-wrapper">';
  [...document.querySelectorAll('.step-info')].map(el=>{
    footerInfoString += el.outerHTML;
    el.remove();
  })
  footerInfoString += '</div>';
  document.getElementById('footer').insertAdjacentHTML('afterbegin', footerInfoString)
}
