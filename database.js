
function music() {
    <!-- id block section -->
    document.getElementById("as").style.display = `none`;
    document.getElementById("navbars").style.display= `none`;
    document.getElementById("message").style.display= `none`;
    document.getElementById("noti").style.display= `none`;
    document.getElementById("throwout").style.display= `none`;
    document.getElementById("upcoming").style.display= `none`;
    document.getElementById("actors").style.display= `none`;
    document.getElementById("catview").style.display= `none`;
    document.getElementById("export").style.display= `none`;
    <!-- end -->
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
                <source src='https://github.com/spark00001/hindi-music/raw/refs/heads/main/Bodyguard%20Title%20Song%20Feat.%20Salman%20Khan,%20Katrina%20Kaif.mp3'></source>
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
                <source src='https://github.com/spark00001/hindi-music/raw/refs/heads/main/I%20love%20You%20(Song)%20Bodyguard%20feat.%20Salman%20khan,%20Kareena%20Kapoor.mp3'></source>
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
                    <audio id='terimeripremkahani_play1'>
                        <source src='https://github.com/spark00001/hindi-music/raw/refs/heads/main/Teri%20Meri.mp3'></source>
                    </audio>
                    <table>
                        <tr>
                            <td>
                                <p id='titleimg'>
                                    <img src='https://i1.sndcdn.com/artworks-000105449528-hgc39r-t500x500.jpg' class='music'>
                                </p>
                            </td>
                            <td>
                                <p id='mtitle'><marquee style='width:96px;'>TERI MERI PREM KAHANI</marquee></p>
                            </td>
                            <td>
                                <div id='terimeripremkahani_button' style='color:gold; font-size:20px; position:relative; left:50px;'>
                                    <span onclick='terimeripremkahani_play()' style='cursor:pointer;'>&#9654;</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>             
                <div id='song'>
                    <audio id='bodyguardtitle_play1'>
                        <source src='https://github.com/spark00001/hindi-music/raw/refs/heads/main/Bodyguard%20Title%20Song%20Feat.%20Salman%20Khan,%20Katrina%20Kaif.mp3'></source>
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
                <div id='song'>
                    <audio id='iloveyou_play1'>
                        <source src='https://github.com/spark00001/hindi-music/raw/refs/heads/main/I%20love%20You%20(Song)%20Bodyguard%20feat.%20Salman%20khan,%20Kareena%20Kapoor.mp3'></source>
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
            
        default:
            audiomain();
            break;
    }
}
