export default ()=>{
  if(!document.getElementById('step-3'))
    return;
  let targetNode = document.getElementById('step-3');
const config = {childList: true, subtree: true };
  const callback = (mutationsList, observer) =>{
    if(mutationsList.length>1){
      mutationsList.map(mutation=>{
        if(mutation.target.id == 'payment_mode-card'&&document.querySelector('#payment_mode-card .payment__method_button')){
          document.querySelector('#payment_mode-card .payment__method_button').classList.add('payment__method_button-active');
          document.querySelector('#payment_mode-card .payment_body').classList.add('payment_body-visible');
        }
      })
    }
  };
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

}
