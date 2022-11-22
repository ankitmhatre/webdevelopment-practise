console.log("this is amazing");
// function run() {
//   var URL =
//     "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs\1.mp3";
//   window.open(URL, null);
// }
// run();
// console.log(run);
// initialize the variables
let songs = [
  {
    songName: "Beetein Lamhe",
    filePath: "./assets/music/1.mp3",
    coverPath: "./assets/cover/1.jpg",
  },
  //   {
  //     songName: "BeeteinLamhe",
  //     filePath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs",
  //     coverPath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
  //   },
  //   {
  //     songName: "BeeteinLamhe",
  //     filePath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs",
  //     coverPath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
  //   },
  //   {
  //     songName: "BeeteinLamhe",
  //     filePath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs",
  //     coverPath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
  //   },
  //   {
  //     songName: "BeeteinLamhe",
  //     filePath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs",
  //     coverPath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
  //   },
  //   {
  //     songName: "BeeteinLamhe",
  //     filePath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs",
  //     coverPath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
  //   },
  //   {
  //     songName: "BeeteinLamhe",
  //     filePath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs",
  //     coverPath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
  //   },
  //   {
  //     songName: "BeeteinLamhe",
  //     filePath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerSongs",
  //     coverPath:
  //       "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
  //   },
];

songs.forEach((k) => {
  console.log(k);
});

let audioElement = new Audio(songs[0].filePath);

console.log(audioElement);
let songIndex = 0; //no song play initially
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let pause = document.getElementById("pausebtn");
let gif = document.getElementById("gif");

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

//seekbar

// audioElement.addEventListener("timeupdate", function () {
//   let progress = parseInt(
//     (audioElement.currentTime / audioElement.duration) * 100
//   );
// });

// myProgressBar.addEventListener("change", () => {
//   audioElement.currentTime =
//     (myProgressBar.value * audioElement.duration) / 100;
// });
