const kacheln = document.querySelectorAll(".kachel");
const scplayer = document.querySelector(".soundcloud");

console.log(scplayer);


for(kachel of kacheln) {
    kachel.addEventListener("click", function() {
        console.log(scplayer.src)
    })
}

