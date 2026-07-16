 function iloveyou_play() {
            let music = document.getElementById("iloveyou_play1");
            if (music) music.play();
            
            document.getElementById("iloveyou_button").innerHTML = `<span onclick='iloveyou_pause()' style='cursor:pointer;'>&#9208;</span>`;
        }

        function iloveyou_pause() {
            let music = document.getElementById("iloveyou_play1");
            if (music) music.pause();
            
            document.getElementById("iloveyou_button").innerHTML = `<span onclick='iloveyou_play()' style='cursor:pointer;'>&#9654;</span>`;
        } 

function bodyguardtitle_play() {
            let music = document.getElementById("bodyguardtitle_play1");
            if (music) music.play();
            
            document.getElementById("bodyguardtitle_button").innerHTML = `<span onclick='bodyguardtitle_pause()' style='cursor:pointer;'>&#9208;</span>`;
        }

        function bodyguardtitle_pause() {
            let music = document.getElementById("bodyguardtitle_play1");
            if (music) music.pause();
            
            document.getElementById("bodyguardtitle_button").innerHTML = `<span onclick='bodyguardtitle_play()' style='cursor:pointer;'>&#9654;</span>`;
        } 

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
