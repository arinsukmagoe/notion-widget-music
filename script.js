let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'kugYXtEpMeM',

        playerVars: {
            autoplay: 0,
            controls: 0
        }
    });
}

const button = document.getElementById("playButton");

button.addEventListener("click", () => {

    if (!isPlaying) {

        player.playVideo();

        button.innerHTML = "⏸ Pause";

        isPlaying = true;

    } else {

        player.pauseVideo();

        button.innerHTML = "▶ Play";

        isPlaying = false;

    }

});
