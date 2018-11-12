function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

document.querySelector("#container").innerHTML = "<div id='newPlayButton'></div>"
document.querySelector("#newPlayButton").addEventListener("click",ringDoorbell)
