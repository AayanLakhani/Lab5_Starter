// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  const jsConfetti = new JSConfetti();

  let horn_type = document.getElementById("horn-select");
  console.log(horn_type);
  let image = document.querySelector("img");
  console.log(image);
  let audio = document.querySelector("audio");
  console.log(audio);

  horn_type.addEventListener('input', function(){
    console.log("Change detected");
    if(horn_type.value === "air-horn"){
      image.src = "assets/images/air-horn.svg"; 
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if(horn_type.value === "car-horn"){
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if(horn_type.value === "party-horn"){
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  })

  let volume_control = document.getElementById("volume-controls");
  let vol_icon = volume_control.querySelector("img");
  let vol_bar = volume_control.querySelector("#volume");

  vol_bar.addEventListener('input', function(){
    let vol = vol_bar.value;
    audio.volume = vol / 100;
    if(vol == 0){
      vol_icon.src = "assets/icons/volume-level-0.svg"
    }
    if(vol < 33){
      vol_icon.src = "assets/icons/volume-level-1.svg";
    }
    else if(vol < 67){
      vol_icon.src = "assets/icons/volume-level-2.svg";
    }
    else{
      vol_icon.src = "assets/icons/volume-level-3.svg";
    }
  })

  let button = document.querySelector("button");

  button.addEventListener('click', function(){
    audio.play();
    if(horn_type.value === "party-horn"){
      jsConfetti.addConfetti();    
    }
  })


}
