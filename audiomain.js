function audiomain(){
    document.getElementById("audio").innerHTML = `
        <div id='song'>
            <audio id='ayekhuda_play1'>
                <source src='https://github.com/spark00001/spark/raw/refs/heads/main/Murder%202%20Aye%20Khuda%20Video%20With%20Lyrics%20Emraan%20Hashmi,%20Jacqueline%20Fernandez.mp3'></source>
            </audio>
            <table>
                <tr>
                    <td>
                        <p id='titleimg'>
                            <img src='https://i.ytimg.com/vi/v0biEkJ9Uv8/sddefault.jpg' class='music'>
                        </p>
                    </td>
                    <td>
                        <p id='mtitle'>AYE KHUDA</p>
                    </td>
                    <td>
                        <div id='ayekhuda_button' style='color:gold; font-size:20px; position:relative; left:50px;'>
                            <span onclick='ayekhuda_play()' style='cursor:pointer;'>&#9654;</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>                                                                                                                                     
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
                        <source src='https://github.com/spark00001/hindi-music/raw/refs/heads/main/bodyguard_title.mp3'></source>
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
                        <source src='https://github.com/spark00001/hindi-music/raw/refs/heads/main/i_love_you.mp3'></source>
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
}
