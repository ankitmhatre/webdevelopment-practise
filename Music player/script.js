var currentPlayingSongIndex = 0;
var repeatState = 0;
var progress = 0;

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let pause = document.getElementById("pausebtn");
let gif = document.getElementById("gif");
let repeatElement = document.getElementById("repeat");
let songTitle = document.getElementById("songTitle");

// {
//0 = repeatAll,
// 1 = repeatOne,
// 2 = repeatNone -not using
//}

let songs = [
  {
    songName: "Beetein Lamhe 1 ",
    filePath: "./assets/music/1.mp3",
    coverPath: "./assets/cover/1.jpg",
  },
  {
    songName: "BeeteinLamhe 2",
    filePath: "./assets/music/1.mp3",
    coverPath: "./assets/cover/1.jpg",
  },
];

checkRepeatState(0);

// songs.forEach((k) => {
//   console.log(k);
// });

let audioElement = new Audio(
  songs[currentPlayingSongIndex].filePath
)


//On load calculation
// audioElement.onloadedmetadata = function() {
//   //alert(audioElement.duration);
// };
audioElement.addEventListener("ended", () => {
  console.log("ended");
  masterPlay.src = "./Icons/Play.svg";
  playNewSong();
});


function playNewSong() {




  console.log("Play new song");

  switch (repeatState) {
    case 0:
      currentPlayingSongIndex++;
      audioElement = new Audio(songs[currentPlayingSongIndex].filePath);
      togglePlayBackState();
      break;
    case 1:
      togglePlayBackState();

      break;
    case 2:
      break;
  }

  // progress = 0;
  // myProgressBar.value = 0;
  console.log("here we will handle changing songs");
  
}



//Listening progress bar values on seeking song progress
myProgressBar.addEventListener("input", function () {
  var newTime = (myProgressBar.value * audioElement.duration) / 1000;
  audioElement.currentTime = newTime;
});

audioElement.addEventListener("timeupdate", () => {
  var totalSong = audioElement.duration;
  var currentTime = audioElement.currentTime;
  var seekToTime = (currentTime * 1000) / totalSong;
  myProgressBar.value = seekToTime;
});

//play pause click
masterPlay.addEventListener("click", function () {
  togglePlayBackState();
});

repeatElement.addEventListener("click", () => {
  if (repeatState == 1) {
    repeatState = 0;
  } else {
    repeatState++;
  }

  checkRepeatState();
});

myProgressBar.addEventListener("input", function () {
  var newTime = (myProgressBar.value * audioElement.duration) / 1000;
  audioElement.currentTime = newTime;
});

function togglePlayBackState() {
  //Listening progress bar values on seeking song progress
  songTitle.innerText = songs[currentPlayingSongIndex].songName;
  

  audioElement.addEventListener("timeupdate", () => {
    var totalSong = audioElement.duration;
    var currentTime = audioElement.currentTime;
    console.log(currentTime)
    var seekToTime = (currentTime * 1000) / totalSong;
    myProgressBar.value = seekToTime;
  });



  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("play");
    masterPlay.classList.add("pause");
    masterPlay.src = "./Icons/Pause.svg";
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("pause");
    masterPlay.classList.add("play");
    masterPlay.src = "./Icons/Play.svg";
    gif.style.opacity = 0;
  }
}

//change the repeat state icon based on the repeat State variable
function checkRepeatState() {
  switch (repeatState) {
    case 0:
      repeatElement.src = "./Icons/repeat.svg";

      break;

    case 1:
      repeatElement.src = "./Icons/repeat-once.png";

      break;

    default:
      repeatElement.src = "./Icons/repeat.svg";
  }
}
