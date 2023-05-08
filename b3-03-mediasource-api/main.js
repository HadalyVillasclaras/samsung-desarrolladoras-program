const fileSelector = document.getElementById('file-selector');
const video = document.querySelector("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const volUp = document.getElementById("vol-up");
const volDown = document.getElementById("vol-down");
const loadingMessage = document.getElementById('loading-message');

function isValidVideoFile(file) {
  const acceptedMimeTypes = [
    'video/mp4',
    'video/webm',
    'video/ogg',
  ];

  return acceptedMimeTypes.includes(file.type);
}

fileSelector.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && isValidVideoFile(file)) {
    loadingMessage.style.display = 'block';
    const url = URL.createObjectURL(file);
    video.src = url;
  } else {
    alert('Por favor, selecciona un archivo de vídeo válido.');
    fileSelector.value = '';
  }
});

play.addEventListener('click', () => {
  video.play();
});

pause.addEventListener('click', () => {
  video.pause();
});

volUp.addEventListener('click', () => {
  if (video.volume < 1) {
    video.volume += 0.1;
  }
});

volDown.addEventListener('click', () => {
  if (video.volume > 0) {
    video.volume -= 0.1;
  }
});

video.addEventListener('loadeddata', () => {
  loadingMessage.style.display = 'none';
});