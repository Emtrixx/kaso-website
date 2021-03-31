const kacheln = document.querySelectorAll(".kachel");
const scplayer = document.querySelector(".soundcloud");
const download = document.querySelector("#mp3Download");
const streamLink = document.querySelector("#streamLink");

kacheln[0].addEventListener("click", function () {
    scplayer.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/934401364&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    download.href = "download/Kaso - Forbidden Fruits.zip";
    streamLink.href = "https://fanlink.to/Forbidden_Fruits";
})

kacheln[1].addEventListener("click", function () {
    scplayer.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/892024321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    download.href = "download/Kaso - City of Stars.zip";
    streamLink.href = "https://kaso.fanlink.to/City_of_Stars";
})

