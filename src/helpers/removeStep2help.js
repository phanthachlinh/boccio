export default (...helpToRemove)=>{

  helpToRemove.map(el=>{
    console.log(el);
    document.querySelector(`input[name="${el}"]`).placeholder = document.querySelector(`label[for="${el}"]`).childNodes[0].textContent.trim().concat(document.querySelector(`#step-2 input[name="${el}"] .help`)?' *':'')

    document.querySelector(`label[for="${el}"]`).remove()
  //  document.querySelector(`#step-2 label[for="${el}"] .help`).remove();
  //  document.querySelector(`#step-2 label[for="${el}"] .required`).remove();
  })
  //address had a '-' as default value

}
