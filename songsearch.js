
    document.getElementById("spark").innerHTML="<table style=' width:100%;padding: 10px 120px;border:1px solid gold;color:gold;'><tr><td style='width:auto;padding:10px;' onclick='spark()'>HOME</td><td></td><td style='width:auto;padding:10px;' onclick='music()'>AUDIO</td></tr></table>";
     function music(){
      document.getElementById("songsrch").innerHTML="<br><input id='inputaudio' onkeyup='songs()' type='text' placeholder='Search songs...'><hr><br>";
     document.getElementById("audio").innerHTML="<div id='song' id='play1'><table><tr><td><p id='titleimg' onclick='ayekhuda()'><img src='https://i.ytimg.com/vi/v0biEkJ9Uv8/sddefault.jpg' class='music'></p></td><td><p id='mtitle' onclick='ayekhuda()'>AYE KHUDA</p></td><td><p id='ayekhuda_button'></p></td><td onclick='d_ayekhuda()'><i class='fa fa-download' style='font-size:px;background-color:gold;'></i>DOWNLOAD</td></tr></table></div><br><div id='song' id='terimeripremkahani'><table><tr><td><p id='titleimg'  onclick='terimeripremkahani()'><img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'></p></td><td><p id='mtitle'  onclick='terimeripremkahani()'>TERI MERI PREM KAHANI</p></td><td><p id='terimeripremkahani_button'></p></td><td onclick='d_terimeripremkahani()'><i class='fa fa-download' style='font-size:px;background-color:gold;'></i>DOWNLOAD</td></tr></table></div>";
     document.getElementById("mainhub").style.display="none";
    }
    function spark(){
      location.reload();
    }
        function songs(){
        var takesong = document.getElementById("inputaudio").value;
        if(takesong.toLowerCase() == "aye khuda" || takesong.toLowerCase() == "a" || takesong.toLowerCase() == "y" || takesong.toLowerCase() == "e" || takesong.toLowerCase() == "k" || takesong.toLowerCase() == "h" || takesong.toLowerCase() == "u" || takesong.toLowerCase() == "d" || takesong.toLowerCase() == "a" || takesong.toLowerCase() == "murder 2" || takesong.toLowerCase() == "murder2" ){
            document.getElementById("audio").innerHTML="<div id='song' id='play1'><table><tr><td><p id='titleimg' onclick='ayekhuda()'><img src='https://i.ytimg.com/vi/v0biEkJ9Uv8/sddefault.jpg' class='music'></p></td><td><p id='mtitle' onclick='ayekhuda()'>AYE KHUDA</p></td><td><p id='ayekhuda_button'></p></td><td onclick='d_ayekhuda()'><i class='fa fa-download' style='font-size:px;color:gold;'></i>DOWNLOAD</td></tr></table></div>";
        }
        if(takesong.toLowerCase() == "teri meri prem kahani" || takesong.toLowerCase() == "t" || takesong.toLowerCase() == "e" || takesong.toLowerCase() == "r" || takesong.toLowerCase() == "i" || takesong.toLowerCase() == "m" || takesong.toLowerCase() == "p" || takesong.toLowerCase() == "k" || takesong.toLowerCase() == "a" || takesong.toLowerCase() == "h" || takesong.toLowerCase() == "n" || takesong.toLowerCase() == "bodyguard"){
            document.getElementById("audio").innerHTML="<div id='song' id='terimeripremkahani'><table><tr><td><p id='titleimg' onclick='terimeripremkahani()'><img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'></p></td><td><p id='mtitle' onclick='terimeripremkahani()'>TERI MERI PREM KAHANI</p></td><td><p id='terimeripremkahani_button'></p></td><td onclick='d_terimeripremkahani()'><i class='fa fa-download' style='font-size:px;color:gold;'></i>DOWNLOAD</td></tr></table></div>";
        }
        document.getElementById("mainhub").style.display="none";
        }
        function ayekhuda(){
            location.assign("/audio/ayekhuda.html");
        }
        function terimeripremkahani(){
            location.assign("/audio/terimeripremkahani.html");
        }
		function d_ayekhuda(){
			location.assign("https://github.com/spark00001/spark/raw/refs/heads/main/Murder%202%20Aye%20Khuda%20Video%20With%20Lyrics%20Emraan%20Hashmi,%20Jacqueline%20Fernandez.mp3");
		}
		function d_terimeripremkahani(){
			location.assign("https://github.com/spark00001/hindi-music/raw/refs/heads/main/Teri%20Meri.mp3");
		}
    
