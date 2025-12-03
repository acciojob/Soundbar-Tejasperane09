
const sounds = ["applause", "boo", "gasp", "tada", "victory","wrong"];

const buttonsDiv = document.getElementById("buttons");


sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = sound;

  const audio = new Audio(`sounds/${sound}.mp3`);

  btn.addEventListener("click", () => {
    stopAllSounds();
    audio.currentTime = 0;
    audio.play();
  });

  buttonsDiv.appendChild(btn);
});


const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopAllSounds);

buttonsDiv.appendChild(stopBtn);


function stopAllSounds() {
  document.querySelectorAll("audio").forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
