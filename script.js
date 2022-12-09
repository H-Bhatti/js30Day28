const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function speecControl (e){
    // console.log(e);
    const y = e.pageY - this.offsetTop;
    // console.log(y)
    // gets the pixels only when mouse is on bas and offset from the top of page to the top of bar
    const percent = y/this.offsetHeight;
    // console.log(percent*100);
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent*100) + "%";
    console.log(height)
    bar.style.height = height;
    const playBackRate = percent * (max-min)+min;
    bar.textContent = playBackRate.toFixed(2) + "x";
    video.playbackRate = playBackRate;
}

speed.addEventListener("mousemove", speecControl);