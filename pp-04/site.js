function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

document.querySelector("#container").innerHTML = "<button id='newPlayButton'>Play Doorbell</button>"
document.querySelector("#newPlayButton").addEventListener("click",ringDoorbell)
