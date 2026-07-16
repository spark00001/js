function ayekhuda_play() {
    let music = document.getElementById("ayekhuda_play1");
    if (music) music.play();
    
    document.getElementById("ayekhuda_button").innerHTML = `<span onclick='ayekhuda_pause()' style='cursor:pointer;'>&#9208;</span>`;
}

function ayekhuda_pause() {
    let music = document.getElementById("ayekhuda_play1");
    if (music) music.pause();
    
    // Change button to play
    document.getElementById("ayekhuda_button").innerHTML = `<span onclick='ayekhuda_play()' style='cursor:pointer;'>&#9654;</span>`;
}
