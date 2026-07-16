 function terimeripremkahani_play() {
            let music8 = document.getElementById("terimeripremkahani_play1");
            if (music8) music8.play();
            
            document.getElementById("terimeripremkahani_button").innerHTML = `<span onclick='terimeripremkahani_pause()' style='cursor:pointer;'>&#9208;</span>`;
        }

        function terimeripremkahani_pause() {
            let music7 = document.getElementById("terimeripremkahani_play1");
            if (music7) music7.pause();
            
            document.getElementById("terimeripremkahani_button").innerHTML = `<span onclick='terimeripremkahani_play()' style='cursor:pointer;'>&#9654;</span>`;
        } 
function iloveyou_play() {
            let music6 = document.getElementById("iloveyou_play1");
            if (music6) music6.play();
            
            document.getElementById("iloveyou_button").innerHTML = `<span onclick='iloveyou_pause()' style='cursor:pointer;'>&#9208;</span>`;
        }

        function iloveyou_pause() {
            let music5 = document.getElementById("iloveyou_play1");
            if (music5) music5.pause();
            
            document.getElementById("iloveyou_button").innerHTML = `<span onclick='iloveyou_play()' style='cursor:pointer;'>&#9654;</span>`;
        } 

function bodyguardtitle_play() {
            let music4 = document.getElementById("bodyguardtitle_play1");
            if (music4) music4.play();
            
            document.getElementById("bodyguardtitle_button").innerHTML = `<span onclick='bodyguardtitle_pause()' style='cursor:pointer;'>&#9208;</span>`;
        }

        function bodyguardtitle_pause() {
            let music3 = document.getElementById("bodyguardtitle_play1");
            if (music3) music3.pause();
            
            document.getElementById("bodyguardtitle_button").innerHTML = `<span onclick='bodyguardtitle_play()' style='cursor:pointer;'>&#9654;</span>`;
        } 

function ayekhuda_play() {
    let music2 = document.getElementById("ayekhuda_play1");
    if (music2) music2.play();
    
    document.getElementById("ayekhuda_button").innerHTML = `<span onclick='ayekhuda_pause()' style='cursor:pointer;'>&#9208;</span>`;
}

function ayekhuda_pause() {
    let music1 = document.getElementById("ayekhuda_play1");
    if (music1) music1.pause();
    
    // Change button to play
    document.getElementById("ayekhuda_button").innerHTML = `<span onclick='ayekhuda_play()' style='cursor:pointer;'>&#9654;</span>`;
}
