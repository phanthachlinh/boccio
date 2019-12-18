export default ()=>{
  if(document.querySelector('input[type="date"]'))
    document.querySelector('input[type="date"]').addEventListener('input',ev=>{
      console.log(ev.target.value)
      if(ev.target.value!=''&&ev.target.getAttribute('data-ira-check')==0){
        ev.target.classList.add('has-value');
        ev.target.classList.remove('error');
        ev.target.setAttribute('data-ira-check',1)
      }else if(ev.target.value==''&&ev.target.getAttribute('data-ira-check')==1){
        ev.target.classList.remove('has-value');
        ev.target.classList.add('error');
        ev.target.setAttribute('data-ira-check',0)
      }

    })
}
