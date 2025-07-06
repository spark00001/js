document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br>       <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='south'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='bollywood'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b> <br><br>       <!--2022--><p id='hollywood'></p><br>";

function language(){
var lang = document.getElementById("genere").value;
if(lang == "all"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br>       <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='south'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='bollywood'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b> <br><br>       <!--2022--><p id='hollywood'></p><br>";
}
if(lang == "punjabi"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p>";
}
if(lang == "south"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='home'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("hollywood").style.display="none";
}
if(lang == "bollywood"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='home'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

document.getElementById("home").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";

}
if(lang == "hollywood"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b><br><br><p id='home'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";


document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";

} 
document.getElementById("home").innerHTML="                                                                <div id='gallery' class='gallery'>                            <div class='image-item'><img src='/punjabi/lover.png' style='border-radius:;' onclick='lover();'><p>LOVER<br>(2022)</p></div>                                     <div class='image-item'><img src='/punjabi/illti.png' style='border-radius:;' onclick='illti();'><p>ILLTI<br>(2025)</p></div>             			                                            <div class='image-item'><img src='/punjabi/lekh.png' style='border-radius:;' onclick='lekh();'><p>LEKH<br>(2022)</p></div>  						                           <div class='image-item'><img src='/punjabi/sufna.png' style='border-radius:;' onclick='sufna();'><p>SUFNA<br>(2020)</p></div> 						                           <div class='image-item'><img src='/punjabi/oye_makhna.png' style='border-radius:;' onclick='oye_makhna();'><p>OYE MAKHNA<br>(2022)</p></div>                                                              <div class='image-item'><img src='/punjabi/guddian_patole.png' style='border-radius:;' onclick='guddyan_patola();'><p>GUDDIYAN<br>PATOLE<br>(2019)</p></div>     <div class='image-item'><img src='/punjabi/mitran_da_naa_chalda.png' style='border-radius:;' onclick='mitran_da_nss_chalda();'><p>MITTRAN DA<br>NAA CHALDA<br>(2023)</p></div>	                   <div class='image-item'><img src='/punjabi/qismat.png' style='border-radius:;' onclick='qismat();'><p>QISMAT<br>(2018)</p></div>					                                   <div class='image-item'><img src='/punjabi/qismat2.png' style='border-radius:;' onclick='qismattwo();'><p>QISMAT 2<br>(2021)</p></div>";


document.getElementById("hollywood").innerHTML="<div id='gallery' class='gallery'>                                                                                 <div class='image-item'>            <img src='/images/minecraft_poster.png' alt='minecraft' onclick='minecraft();'> <p>MINECRAFT<br>(2025)</p>       </div>                                                                           <div class='image-item'>            <img src='/images/series-1.png' alt='Image from 2021()' onclick='mocn_knight();'>            <p>MOCN<br>KNIGHT(2022)</p>        </div>        <div class='image-item'>            <img src='/images/series-2.png' onclick='halo();'  >            <p>HALO (2022</p>        </div>        <div class='image-item'>            <img src='/images/series-3.png'  onclick='vikings_valhalla();'>            <p>VIKING&nbsp;VALHALLA<br>SEASON 1&nbsp(2022)</p>        </div>        <div class='image-item'>            <img src='/images/upcoming-1.png' onclick='the_northman();' >            <p> THE NORTHMAN<br>(2022)</p>        </div> <div class='image-item'>            <img src='/images/upcoming-2.png' onclick='doctor_strange();' >            <p>DOCTOR STRANGE<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/upcoming-3.png' onclick='memmory();' >            <p>MEMMORY<br>(2022)</p>        </div><div class='image-item'>            <img src='/images/upcoming-4.png' onclick='the_unbearable_weight_of_massive_talent();' >            <p>THE UNBEARABLE<br>WEIGHT OF<br>MASSIVE TALENT<br>(2022)</p>     </div>       <div class='image-item'>            <img src='/images/movie-1.png' alt='Image from 2021()' onclick='sonic_2();'>            <p>SONIC 2<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-2.png' onclick='morbius();' >            <p>MORBIUS<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-3.png' onclick='adam_project();' >            <p>ADAM PROJECT<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-5.png' onclick='batman();' >            <p> BATMAN<br>(2022)</p>        </div><div class='image-item'>            <img src='/images/movie-6.png' alt='Image from 2021()' onclick='uncharted();'>            <p>UNCHARTED<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-7.png'  onclick='death_on_the_nile();'>            <p>DEATH ON THE NILE<br>(2022)</p>    </div>  <div class='image-item'>          <a href='/spark/kings_man.html'><img src='/images/movie-8.png' onclick='kings_man()' > </a>           <p>KING'S MAN<br>(2021)</p>        </div>        <div class='image-item'>           <a href='/spark/money_heist_s5.html'><img src='/images/series-4.png' onclick='money_heist_sfive()' ></a>           <p>MONEY HEIST<br>(SEASON 5)<br>(2021)</p>        </div><div class='image-item'>            <a href='/spark/free_guy.html'><img src='/images/movie-4.png' onclick='free_guy();' ></a>            <p>FREE GUY <br>(2021)</p></div></div>";



document.getElementById("bollywood").innerHTML="<div id='gallery' class='gallery'>    <!--2025-->	                                                                      <div class='image-item'>            <img src='/images/jaat_poster.png' alt='jaat' onclick='jaat();'> <p>JAAT <BR>(2025)</p>        </div>	                       <div class='image-item'>            <img src='/images/sikandar_poster.png' alt='sikandar' onclick='sikandar();'> <p>SIKANDAR<br>(2025)</p>   </div>   </div>";


document.getElementById("south").innerHTML="<div id='gallery' class='gallery'>    <!--2025-->	                                                                                                     <div class='image-item'>            <img src='/south/single.png' alt='jaat' onclick='single();'> <p>SINGLE <BR>(2025)</p>        </div>	                                                    <div class='image-item'>            <img src='/south/kgf2.png' alt='KGF 1' onclick='kgf2();'> <p>KGF 2<br>(2022)</p></div>                                                           <div class='image-item'>            <img src='/south/kgf1.png' alt='KGF 1' onclick='kgf1();'> <p>KGF 1<br>(2018)</p>   </div> </div>";
 }
