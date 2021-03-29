const kacheln = document.querySelectorAll(".kachel");
const scplayer = document.querySelector(".soundcloud");

kacheln[0].addEventListener("click", function () {
    scplayer.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/934401364&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"

})

kacheln[1].addEventListener("click", function () {
    scplayer.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/892024321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
})

