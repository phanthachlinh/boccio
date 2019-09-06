import React from 'react';
import setDonation from '../helpers/setDonation';
import renderCardTypes from './CardTypes';
export default function(props){
  displayDefaultBloc();
  return(
    <>
      <DonationTypeChooser translation='MONTHLY' id="regular-chooser" />
      <DonationTypeChooser translation='ONCE' id="once-chooser" />
    </>
  )
}
function DonationTypeChooser(props){

  return(
    <div id={props.id} onClick={setActiveDonationType} className={(props.id.split('-')[0]===document.querySelector('#step-1 .bloc').id?'active':'')+' donation-type'}>
    {props.translation}
    </div>
  )
}
function displayDefaultBloc(){
  let defaultBloc = document.querySelector('#step-1 .bloc');
    document.getElementById(defaultBloc.id).classList.add('bloc-visible');
    console.log(defaultBloc.id)

}
function setActiveDonationType(ev){
  if(ev.target.id=== 'regular-chooser'){
      document.querySelector('#once-chooser').classList.remove('active');
      document.querySelector('#once').classList.remove('bloc-visible');
      setDonation('regular');
  }else{
      document.querySelector('#regular-chooser').classList.remove('active');
      document.querySelector('#regular').classList.remove('bloc-visible');
      setDonation('once');
  }
  renderCardTypes();
  ev.target.classList.add('active');
  document.getElementById(ev.target.id.split('-')[0]).classList.add('bloc-visible')
}
