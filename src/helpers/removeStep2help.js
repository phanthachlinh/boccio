export default (...helpToRemove)=>{
  console.log(helpToRemove);
  helpToRemove.map(el=>{
    document.querySelector(`#step-2 label[for="${el}"] .help`).remove();
    document.querySelector(`#step-2 label[for="${el}"] .required`).remove();
    if(el === 'address1')
      document.getElementById(el).placeholder = document.querySelector(`label[for="${el}"]`).innerText.split(' ')[0];
    else {
      document.getElementById(el).placeholder = document.querySelector(`label[for="${el}"]`).innerText;
    }
    document.querySelector(`label[for="${el}"]`).remove()
    console.log();
  })
  //address had a '-' as default value
  document.getElementById('address1').value=""
}
