const kacheln = document.querySelector(".kachel");


for (const kachel of kacheln) {
    kachel.addEventListener("click", switchSong())
}

function switchSong() {
    alert("Test")
}