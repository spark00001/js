
document.getElementById("song").innerHTML="<table style=' width:100%;padding: 10px 120px;border:1px solid gold;'><tr><td style='width:auto;padding:10px;' onclick='spark()'>HOME</td><td></td><td style='width:auto;padding:10px;' onclick='music()'>AUDIO</td></tr></table>";
functiom music(){
      document.getElementById("songsrch").innerHTML="<br><input id='inputaudio' onkeyup='songs()' type='text' placeholder='Search songs...'><hr><br>";
     document.getElementById("audio").innerHTML="<div id='song' id='play1'><table><tr><td><p id='titleimg' onclick='ayekhuda()'><img src='https://i.ytimg.com/vi/v0biEkJ9Uv8/sddefault.jpg' class='music'></p></td><td><p id='mtitle' onclick='ayekhuda()'>AYE KHUDA</p></td><td><p id='ayekhuda_button'></p></td><td onclick='d_ayekhuda()'><i class='fa fa-download' style='font-size:px;background-color:gold;'></i>DOWNLOAD</td></tr></table></div><br><div id='song' id='terimeripremkahani'><table><tr><td><p id='titleimg'  onclick='terimeripremkahani()'><img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'></p></td><td><p id='mtitle'  onclick='terimeripremkahani()'>TERI MERI PREM KAHANI</p></td><td><p id='terimeripremkahani_button'></p></td><td onclick='d_terimeripremkahani()'><i class='fa fa-download' style='font-size:px;background-color:gold;'></i>DOWNLOAD</td></tr></table></div>";
     document.getElementById("mainhub").style.display="none";
}
    function spark(){
      location.reload();
    }
        
