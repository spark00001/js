
function music() {
    document.getElementById("songsrch").innerHTML = `
        <br>
        <input id='inputaudio' onkeyup='audio_database()' type='text' placeholder='Search songs...'>
        <hr>
        <br>
    `;
    audiomain();
}

function spark() {
    location.reload();
}

function audio_database(){
    audiomain();
    songs();
}

function songs() {
    var takesong = document.getElementById("inputaudio").value.toLowerCase();
    
    switch (takesong) {
        case "aye khuda":
            document.getElementById("audio").innerHTML = `
                <div id='song'>
                    <audio id='ayekhuda_play1'>
                        <source src='https://github.com/spark00001/spark/raw/refs/heads/main/Murder%202%20Aye%20Khuda%20Video%20With%20Lyrics%20Emraan%20Hashmi,%20Jacqueline%20Fernandez.mp3'></source>
                    </audio>
                    <table>
                        <tr>
                            <td>
                                <p id='titleimg' onclick='ayekhuda()'>
                                    <img src='https://i.ytimg.com/vi/v0biEkJ9Uv8/sddefault.jpg' class='music'>
                                </p>
                            </td>
                            <td>
                                <p id='mtitle' onclick='ayekhuda()'>AYE KHUDA</p>
                            </td>
                            <td>
                                <div id='ayekhuda_button' style='color:gold; font-size:20px; position:relative; left:50px;'>
                                    <span onclick='ayekhuda_play()' style='cursor:pointer;'>&#9654;</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            `;
            break;

        case "teri meri prem kahani":
            document.getElementById("audio").innerHTML = `
                <div id='song'>
                    <table>
                        <tr>
                            <td><p id='titleimg' onclick='terimeripremkahani()'><img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'></p></td>
                            <td><p id='mtitle' onclick='terimeripremkahani()'>TERI MERI PREM KAHANI</p></td>
                            <td><p id='terimeripremkahani_button'></p></td>
                            <td onclick='d_terimeripremkahani()'><i class='fa fa-download' style='color:gold;'></i>DOWNLOAD</td>
                        </tr>
                    </table>
                </div>
            `;
            break;
            
        case "bodyguard title":
            document.getElementById("audio").innerHTML = `
               <div id='song'>
            <audio id='bodyguardtitle_play1'>
                <source src='/hindi-music/Bodyguard Title Song Feat. Salman Khan, Katrina Kaif.mp3'></source>
            </audio>
            <table>
                <tr>
                    <td>
                        <p id='titleimg'>
                            <img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'>
                        </p>
                    </td>
                    <td>
                        <p id='mtitle'><marquee STYLE='width:96px;'>BODYGUARD TITLE</marquee></p>
                    </td>
                    <td>
                        <div id='bodyguardtitle_button' style='color:gold; font-size:20px; position:relative; left:50px;'>
                            <span onclick='bodyguardtitle_play()' style='cursor:pointer;'>&#9654;</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>  
            `;
            break;
            
        case "i love you":
            document.getElementById("audio").innerHTML = `
                <div id='song'>
            <audio id='iloveyou_play1'>
                <source src='/hindi-music/Bodyguard Title Song Feat. Salman Khan, Katrina Kaif.mp3'></source>
            </audio>
            <table>
                <tr>
                    <td>
                        <p id='titleimg'>
                            <img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'>
                        </p>
                    </td>
                    <td>
                        <p id='mtitle'><marquee STYLE='width:96px;'>I LOVE YOU</marquee></p>
                    </td>
                    <td>
                        <div id='iloveyou_button' style='color:gold; font-size:20px; position:relative; left:50px;'>
                            <span onclick='iloveyou_play()' style='cursor:pointer;'>&#9654;</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
            `;
            break;
            
        case "bodyguard":
            document.getElementById("audio").innerHTML = `
                <div id='song'>
                    <table>
                        <tr>
                            <td><p id='titleimg' onclick='terimeripremkahani()'><img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'></p></td>
                            <td><p id='mtitle' onclick='terimeripremkahani()'>TERI MERI PREM KAHANI</p></td>
                            <td><p id='terimeripremkahani_button'></p></td>
                        </tr>
                    </table>
                </div> 
                <br>
                <div id='song'>
                    <table>
                        <tr>
                            <td><p id='titleimg' onclick='bodyguard_title()'><img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'></p></td>
                            <td><p id='mtitle' onclick='bodyguard_title()'>BODYGUARD TITLE</p></td>
                            <td><p id='terimeripremkahan_button'></p></td>
                        </tr>
                    </table>
                </div> 
                <BR>
                <div id='song'>
                    <table>
                        <tr>
                            <td><p id='titleimg' onclick='bodyguard_iloveyou()'><img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'></p></td>
                            <td><p id='mtitle' onclick='bodyguard_iloveyou()'>I LOVE YOU</p></td>
                            <td><p id='terimeripremkahan_button'></p></td>
                        </tr>
                    </table>
                </div>
            `;
            break;
            
        default:
            audiomain();
            break;
    }
}
