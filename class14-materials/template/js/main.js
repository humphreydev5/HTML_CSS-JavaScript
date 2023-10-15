const synth = window.speechSynthesis;
document.querySelector('#speak').addEventListener('click', run)

function run(){
  const toSpeak = document.querySelector('#talk').value

  const yellText =  `${toSpeak}`

  document.querySelector('#speakHere').innerText = toSpeak

  let speakThis = new SpeechSynthesisUtterance(toSpeak);

  synth.speak(speakThis);

}