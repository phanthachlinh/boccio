export default (...helpToRemove)=>{

  [...document.querySelectorAll('#step-2 input[type="text"]')].map(el=>{
    console.log(document.querySelector(`label[for="${el.name}"]`).childNodes);
      document.querySelector(`input[name="${el.name}"]`).value='';
    document.querySelector(`input[name="${el.name}"]`).placeholder = document.querySelector(`label[for="${el.name}"]`).childNodes[0].textContent
    //el=='address1'?'Address':document.querySelector(`label[for="${el}"]`).childNodes[0].textContent.trim().concat(document.querySelector(`#step-2 input[name="${el}"] .help`)?' *':'')
    if(el == 'address1')
      document.querySelector(`input[name="${el}"]`).value='';
    document.querySelector(`label[for="${el}"]`)
  //  document.querySelector(`#step-2 label[for="${el}"] .help`).remove();
  //  document.querySelector(`#step-2 label[for="${el}"] .required`).remove();
  })
  //address had a '-' as default value

}
