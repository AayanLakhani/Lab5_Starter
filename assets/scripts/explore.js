// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let selection = document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  let voices = []

  let face = document.querySelector("img");
  console.log(face);

  function populateVoiceList() {
    selection.innerHTML = '';
    
    voices = speechSynthesis.getVoices();

    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      selection.appendChild(option);
    });
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const speakButton = document.querySelector('button');
  speakButton.addEventListener('click', function(){
    const inputTxt = document.getElementById('text-to-speak');

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = selection.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }

    utterThis.onstart = function() {
        face.src = "assets/images/smiling-open.png";
    };

    // 2. When the speech ends, close the mouth
    utterThis.onend = function() {
        face.src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);

    inputTxt.blur();
  })
}
