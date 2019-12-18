//greetings text on the thankyoupage ignores image height when an image is floated and text is shorter
export default ()=>{
  document.getElementById('greetings-text')?
    document.getElementById('greetings-text').insertAdjacentHTML('beforeEnd','<div class="greetings-stretcher"></div>'):'';
}
