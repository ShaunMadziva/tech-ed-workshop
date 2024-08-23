const playButton = document.getElementById("btn-play");
const pauseButton = document.getElementById("btn-pause");
const stopButton = document.getElementById("btn-stop");
const backButton = document.getElementById("btn-back");
const fowardButton = document.getElementById("btn-foward");

const videoPlayer = document.getElementById("video-player");

playButton.addEventListener("click", function (event) {
  console.dir(videoPlayer);
  videoPlayer.play();
});

pauseButton.addEventListener("click", function (event) {
  videoPlayer.pause();
});

stopButton.addEventListener("click", function (event) {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
});

backButton.addEventListener("click", function (event) {
  videoPlayer.currentTime -= 10;
});

fowardButton.addEventListener("click", function (event) {
  videoPlayer.currentTime += 10;
});
