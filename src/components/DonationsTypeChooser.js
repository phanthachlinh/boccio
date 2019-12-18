import React from 'react';
import setDonation from '../helpers/setDonation';
import renderCardTypes from './CardTypes';
export default function(props){
  if(!document.querySelector('#step-1'))
  return <></>;
  displayDefaultBloc();
  return(
    <>
      <DonationTypeChooser
        translation='regular'
        id="regular-chooser"
        onlyType={document.getElementsByClassName('bloc').length == 1 && document.getElementsByClassName('bloc')[0].id == 'regular'? 'donation__type-only':''}
        hideType={document.getElementById('regular')!=null?'':'donation_chooser-hidden'}
        />
      <DonationTypeChooser
        translation='once'
        id="once-chooser"
        onlyType={document.getElementsByClassName('bloc').length == 1 && document.getElementsByClassName('bloc')[0].id == 'once'? 'donation__type-only':''}
        hideType={document.getElementById('once')!=null?'':'donation_chooser-hidden'}
        />
    </>
  )
}
function DonationTypeChooser(props){
  return(
    <div
      id={props.id}
      onClick={setActiveDonationType}
      className={`${props.id.split('-')[0]===document.querySelector('#step-1 .bloc').id?'active':''} ${props.onlyType} ${props.hideType}`}>
    {document.querySelector(`#${props.translation} .bloc-content h3`)?document.querySelector(`#${props.translation} .bloc-content h3`).innerText:''}
    </div>
  )
}
function displayDefaultBloc(){
  let defaultBloc = document.querySelector('#step-1 .bloc');
    document.getElementById(defaultBloc.id).classList.add('bloc-visible');

}
function setActiveDonationType(ev){
  if(ev.target.classList.contains('active'))
    return
  if(ev.target.id=== 'regular-chooser'){
      document.querySelector('#once-chooser').classList.remove('active');
      document.querySelector('#once').classList.remove('bloc-visible');
      setDonation('regular');
  }else{
      document.querySelector('#regular-chooser').classList.remove('active');
      document.querySelector('#regular').classList.remove('bloc-visible');
      setDonation('once');
  }
  ev.target.classList.add('active');
  document.getElementById(ev.target.id.split('-')[0]).classList.add('bloc-visible')
}
