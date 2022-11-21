console.log("this is amazing");

// initialize the variables
let songs = [
  {
    songName: "BeeteinLamhe",
    filePath:
      "D:AcademicJavascriptjs/practicewebdevelopment-practiseMusic/playerSongs",
    coverPath:
      "D:AcademicJavascriptjs practicewebdevelopment-practiseMusic playerCover Images",
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

let audioElement = new Audio(
  "D:/Academic/Javascript/js practice/webdevelopment-practise/Music player/Songs"
);

console.log(audioElement);
let songIndex = 0; //no song play initially
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

//Listen to events
myProgressBar.addEventListener("timeupdate", function () {});

//play pause click

masterPlay.addEventListener("click", function () {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  }
});
