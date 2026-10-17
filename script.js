(() => {
  "use strict";

  const welcomeScreen = document.getElementById("welcomeScreen");
  const startButton = document.getElementById("startButton");
  const siteContent = document.getElementById("siteContent");
  const audio = document.getElementById("song");
  const audioError = document.getElementById("audioError");
  const musicPlayer = document.getElementById("musicPlayer");
  const musicToggle = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");
  const musicStatus = document.getElementById("musicStatus");
  const messageButton = document.getElementById("messageButton");
  const secretMessage = document.getElementById("secretMessage");
  const photoDialog = document.getElementById("photoDialog");
  const dialogImage = document.getElementById("dialogImage");
  const dialogCaption = document.getElementById("dialogCaption");
  const dialogClose = document.getElementById("dialogClose");

  let opened = false;

  function updateMusicUI(isPlaying) {
    musicToggle.setAttribute("aria-label", isPlaying ? "Pause music" : "Play music");
    musicIcon.textContent = isPlaying ? "Ⅱ" : "▶";
    musicStatus.textContent = isPlaying ? "playing hehe ♡" : "paused for now";
    musicPlayer.classList.toggle("paused", !isPlaying);
  }

  async function openSurprise() {
    if (opened) return;
    opened = true;
    startButton.classList.add("opening");
    startButton.disabled = true;
    startButton.setAttribute("aria-label", "Opening your surprise");

    // Start playback directly from the user's tap, before any asynchronous delay.
    audio.volume = 0.72;
    const playback = audio.play();

    // Reveal the site even if a browser or device refuses audio playback.
    window.setTimeout(() => {
      welcomeScreen.classList.add("leaving");
      window.setTimeout(() => {
        welcomeScreen.hidden = true;
        siteContent.hidden = false;
        musicPlayer.hidden = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 450);
    }, 800);

    try {
      await playback;
      updateMusicUI(true);
      audioError.textContent = "";
    } catch (error) {
      updateMusicUI(false);
      audioError.textContent = "the music didn't start 😭 tap play down there and try again hehe";
      musicStatus.textContent = "tap play to start ♡";
    }
  }

  startButton.addEventListener("click", openSurprise);

  musicToggle.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        updateMusicUI(true);
      } catch (error) {
        updateMusicUI(false);
        musicStatus.textContent = "couldn't play, try again ♡";
      }
    } else {
      audio.pause();
      updateMusicUI(false);
    }
  });

  audio.addEventListener("play", () => updateMusicUI(true));
  audio.addEventListener("pause", () => updateMusicUI(false));
  audio.addEventListener("ended", () => updateMusicUI(false));
  audio.addEventListener("error", () => {
    audioError.textContent = "couldn't load the song 😭 check that audio/valentine.mp3 is in the project";
    musicStatus.textContent = "song couldn't load";
  });

  messageButton.addEventListener("click", () => {
    const willShow = secretMessage.hidden;
    secretMessage.hidden = !willShow;
    messageButton.setAttribute("aria-expanded", String(willShow));
    messageButton.textContent = willShow ? "okay that's enough 😭❤️" : "tap me !! ❤️";
  });

  document.querySelectorAll(".photo-open").forEach((button) => {
    button.addEventListener("click", () => {
      const imagePath = button.dataset.full;
      const caption = button.dataset.caption || "";
      dialogImage.src = imagePath;
      dialogImage.alt = button.querySelector("img")?.alt || caption;
      dialogCaption.textContent = caption;
      if (typeof photoDialog.showModal === "function") {
        photoDialog.showModal();
      } else {
        window.open(imagePath, "_blank", "noopener");
      }
    });
  });

  function closePhotoDialog() {
    if (photoDialog.open) photoDialog.close();
  }
  dialogClose.addEventListener("click", closePhotoDialog);
  photoDialog.addEventListener("click", (event) => {
    if (event.target === photoDialog) closePhotoDialog();
  });
  photoDialog.addEventListener("close", () => {
    dialogImage.src = "";
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePhotoDialog();
  });
})();
