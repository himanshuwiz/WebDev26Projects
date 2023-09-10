let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon"); 

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});

progress.oninput = function () {
    song.currentTime = progress.value; 
};
