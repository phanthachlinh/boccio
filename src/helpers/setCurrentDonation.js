export default function(){
  console.log(Step1.current_donation);
  let currentDonation = Step1.current_donation;
  Step1.set_donation(currentDonation);
  console.log(document.getElementById(`value_of_amount-${currentDonation.frequency}-${currentDonation.amount}`))
  if(document.getElementById(`value_of_amount-${currentDonation.frequency}-${currentDonation.amount}`))
    document.getElementById(`value_of_amount-${currentDonation.frequency}-${currentDonation.amount}`).classList.add('value_of_amount-active')

}
