console.log("this is amazing");
// function run() {
//   var URL =
//     "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs\1.mp3";
//   window.open(URL, null);
// }
// run();
// console.log(run);
// initialize the variables

var currentPlayingSongIndex = 0;
var repeatState = 0;

let songIndex = 0; //no song play initially
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let pause = document.getElementById("pausebtn");
let gif = document.getElementById("gif");
let repeatElement = document.getElementById("repeat");

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

songs.forEach((k) => {
  console.log(k);
});

let audioElement = new Audio(songs[currentPlayingSongIndex].filePath);

console.log(audioElement);

//Listen to events
myProgressBar.addEventListener("timeupdate", function () {});

//play pause click
masterPlay.addEventListener("click", function () {
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
});



repeatElement.addEventListener("click", ()=>{
  if(repeatState==1){
    repeatState=0;
  }else{
    repeatState++;
  }

 checkRepeatState()
})


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
