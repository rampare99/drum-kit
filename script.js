function preloadAudio() {
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => (audio.preload = "auto"));
  }

  preloadAudio();

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }

  function playSoundMouse(keyValue) {
    const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
    const key = document.querySelector(`div[data-key="${keyValue}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach((key) => {
    key.addEventListener("click", () =>
      playSoundMouse(key.attributes[0].nodeValue)
    );
  });
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSound);