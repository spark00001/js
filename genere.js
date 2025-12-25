document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>OLLYWOOD</b><br><br><p id='ollywood'></p><br><br>          <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PAK DRAMA</b><br><br><p id='pakdrama'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SHORT FILMS</b><br><br><p id='shortfilms'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>WEBSERIES</b><br><br><p id='webseries'></p><br>       <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='south'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='bollywood'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b> <br><br>       <!--2022--><p id='hollywood'></p><br>";

function language(){
var lang = document.getElementById("genere").value;
if(lang == "alls"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>OLLYWOOD</b><br><br><p id='ollywood'></p><br><br>          <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PAK DRAMA</b><br><br><p id='pakdrama'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SHORT FILMS</b><br><br><p id='shortfilms'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>WEBSERIES</b><br><br><p id='webseries'></p><br>       <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='south'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='bollywood'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b> <br><br>       <!--2022--><p id='hollywood'></p><br>";
}
  if(lang == "ollywood"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>OLLYWOOD</b><br><br><p id='ollywood'></p><br><br><p id='pakdrama'></p><br><br><p id='shortfilms'></p><br><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

   document.getElementById("pakdrama").style.display="none";
 document.getElementById("shortfilms").style.display="none";
document.getElementById("webseries").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";
} 
 if(lang == "pakdrama"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PAK DRAMA</b><br><br><p id='pakdrama'></p><br><br><p id='ollywood'></p><br><br><p id='shortfilms'></p><br><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

  document.getElementById("ollywood").style.display="none";
 document.getElementById("shortfilms").style.display="none";
document.getElementById("webseries").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";
} 
 if(lang == "shortfilms"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SHORT FILMS</b><br><br><p id='shortfilms'></p><br><br><p id='ollywood'></p><br><br><p id='pakdrama'></p><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

  document.getElementById("ollywood").style.display="none";
 document.getElementById("pakdrama").style.display="none";
document.getElementById("webseries").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";
} 
if(lang == "webseries"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>WEBSERIES</b><br><p id='pakdrama'></p><br><p id='home'></p><br><p id='webseries'></p><br><br><p id='ollywood'></p><br><p id='shortfilms'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

 document.getElementById("ollywood").style.display="none";
 document.getElementById("pakdrama").style.display="none";
document.getElementById("shortfilms").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";
} 

if(lang == "punjabi"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br><br><p id='ollywood'></p><br><p id='pakdrama'></p><br><p id='shortfilms'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

 document.getElementById("ollywood").style.display="none";
 document.getElementById("pakdrama").style.display="none";
 document.getElementById("shortfilms").style.display="none";
 document.getElementById("south").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("hollywood").style.display="none";
document.getElementById("webseries").style.display="none";
}
if(lang == "south"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='home'></p><br><p id='pakdrama'></p><br><p id='webseries'></p><br><p id='south'></p><br><br><p id='ollywood'></p><br><p id='shortfilms'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

 document.getElementById("ollywood").style.display="none";
 document.getElementById("pakdrama").style.display="none";
 document.getElementById("shortfilms").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("hollywood").style.display="none";
document.getElementById("webseries").style.display="none";
}
if(lang == "bollywood"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='home'></p><br><p id='pakdrama'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><br><p id='ollywood'></p><br><p id='shortfilms'></p><br><p id='hollywood'></p>";

 document.getElementById("ollywood").style.display="none";
 document.getElementById("pakdrama").style.display="none";
 document.getElementById("shortfilms").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";
document.getElementById("webseries").style.display="none";
}
if(lang == "hollywood"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b><br><br><p id='home'></p><br><p id='pakdrama'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p><p id='shortfilms'></p><br><br><p id='ollywood'></p><br>";

 document.getElementById("ollywood").style.display="none";
 document.getElementById("pakdrama").style.display="none";
document.getElementById("shortfilms").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("webseries").style.display="none";
} 
<!--genere content-->

 document.getElementById("ollywood").innerHTML="<div id='gallery' class='gallery'> <div class='image-item'>            <img src='/ollywood/kerek.png' alt='kerek' onclick='kerek();'> <p>KERE<BR>(2025)</p>        </div>           <div class='image-item'>            <img src='/ollywood/karma.png' alt='kabhi main kabhi tum' onclick='karma();'> <p>KARMA<BR>(2024)</p>        </div>   </div>";
 
document.getElementById("pakdrama").innerHTML="<p id='pakdrama'></p><br><div id='gallery' class='gallery'>  <div class='image-item'>            <img src='/pakdrama/kabhimainkabhitum.png' alt='kabhi main kabhi tum' onclick='kabhimainkabhitum();'> <p>KABHI MAIN <br> KABHI TUM<BR>(2024)</p>        </div>   </div>";

 
 document.getElementById("shortfilms").innerHTML="<div id='gallery' class='gallery'> <div class='image-item'>            <img src='/shortfilms/vyarth.png' alt='aaina' onclick='vyarth();'> <p>VYARTH<BR>(2025)</p>        </div>   <div class='image-item'>            <img src='/shortfilms/thebrokentable.png' alt='aaina' onclick='thebrokentable();'> <p>THE BROKEN<BR>TABLE (2023)</p>        </div><div class='image-item'>            <img src='/shortfilms/aaina.png' alt='aaina' onclick='aaina();'> <p>AAINA <BR>(2024)</p></div> </div>";


document.getElementById("webseries").innerHTML="<div id='gallery' class='gallery'>                                                                                    <div class='image-item'>            <img src='/images/head_over_heels.png' alt='head over heels' onclick='head_over_heels();'> <p>HEAD OVER HEELS<BR>SEASON 1<br>(2025)</p>        </div>	<div class='image-item'>            <img src='/images/good_boy.png' alt='GOOD BOY' onclick='good_boy();'> <p>GOOD BOY<BR>SEASON 1<br>(2025)</p>        </div>	<div class='image-item'>            <img src='/south/live_telecast.png' alt='live telecast' onclick='live_telecast();'> <p>LIVE TELECAST<BR>SEASON 1<br>(2021)</p>        </div>	<div class='image-item'>            <img src='' alt='' onclick=''> <p></p>        </div>	                     <div class='image-item'>            <img src='https://spark00001.github.io//images/campus_diaries.png' alt='CAMPUS DIARiES' onclick='campus_diaries();'> <p>CAMPUS DIARIES<BR>SEASON 1<br>(2022)</p>        </div>	                                                                      <div class='image-item'>            <img src='https://spark00001.github.io//images/mirzapur.png' alt='MIRZAPUR SEASON 2' onclick='m_s1();'> <p>MIRZAPUR<BR>SEASON 1<br>(2018)</p>        </div> </div>";


document.getElementById("home").innerHTML="                                                                <div id='gallery' class='gallery'>                            <div class='image-item'><img src='/punjabi/lover.png' style='border-radius:;' onclick='lover();'><p>LOVER<br>(2022)</p></div>                                     <div class='image-item'><img src='/punjabi/illti.png' style='border-radius:;' onclick='illti();'><p>ILLTI<br>(2025)</p></div>             			                                            <div class='image-item'><img src='/punjabi/lekh.png' style='border-radius:;' onclick='lekh();'><p>LEKH<br>(2022)</p></div>  						                           <div class='image-item'><img src='/punjabi/sufna.png' style='border-radius:;' onclick='sufna();'><p>SUFNA<br>(2020)</p></div> 						                           <div class='image-item'><img src='/punjabi/oye_makhna.png' style='border-radius:;' onclick='oye_makhna();'><p>OYE MAKHNA<br>(2022)</p></div>                                                              <div class='image-item'><img src='/punjabi/guddian_patole.png' style='border-radius:;' onclick='guddyan_patola();'><p>GUDDIYAN<br>PATOLE<br>(2019)</p></div>     <div class='image-item'><img src='/punjabi/mitran_da_naa_chalda.png' style='border-radius:;' onclick='mitran_da_nss_chalda();'><p>MITTRAN DA<br>NAA CHALDA<br>(2023)</p></div>	                   <div class='image-item'><img src='/punjabi/qismat.png' style='border-radius:;' onclick='qismat();'><p>QISMAT<br>(2018)</p></div>					                                   <div class='image-item'><img src='/punjabi/qismat2.png' style='border-radius:;' onclick='qismattwo();'><p>QISMAT 2<br>(2021)</p></div>";


document.getElementById("hollywood").innerHTML="<div id='gallery' class='gallery'>                              <div class='image-item'>            <img src='/images/autumntheblackjaguar.png' alt='Autumn The Black Jaguar' onclick='autumntheblackjaguar();'> <p>AUTUMN THE<br>BLACK JAGUAR<br>(2024)</p>       </div>                                                     <div class='image-item'>            <img src='/images/minecraft_poster.png' alt='minecraft' onclick='minecraft();'> <p>MINECRAFT<br>(2025)</p>       </div>                                                                           <div class='image-item'>            <img src='/images/series-1.png' alt='Image from 2021()' onclick='mocn_knight();'>            <p>MOCN<br>KNIGHT(2022)</p>        </div>        <div class='image-item'>            <img src='/images/series-2.png' onclick='halo();'  >            <p>HALO (2022</p>        </div>        <div class='image-item'>            <img src='/images/series-3.png'  onclick='vikings_valhalla();'>            <p>VIKING&nbsp;VALHALLA<br>SEASON 1&nbsp(2022)</p>        </div>        <div class='image-item'>            <img src='/images/upcoming-1.png' onclick='the_northman();' >            <p> THE NORTHMAN<br>(2022)</p>        </div> <div class='image-item'>            <img src='/images/upcoming-2.png' onclick='doctor_strange();' >            <p>DOCTOR STRANGE<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/upcoming-3.png' onclick='memmory();' >            <p>MEMMORY<br>(2022)</p>        </div><div class='image-item'>            <img src='/images/upcoming-4.png' onclick='the_unbearable_weight_of_massive_talent();' >            <p>THE UNBEARABLE<br>WEIGHT OF<br>MASSIVE TALENT<br>(2022)</p>     </div>       <div class='image-item'>            <img src='/images/movie-1.png' alt='Image from 2021()' onclick='sonic_2();'>            <p>SONIC 2<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-2.png' onclick='morbius();' >            <p>MORBIUS<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-3.png' onclick='adam_project();' >            <p>ADAM PROJECT<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-5.png' onclick='batman();' >            <p> BATMAN<br>(2022)</p>        </div><div class='image-item'>            <img src='/images/movie-6.png' alt='Image from 2021()' onclick='uncharted();'>            <p>UNCHARTED<br>(2022)</p>        </div>        <div class='image-item'>            <img src='/images/movie-7.png'  onclick='death_on_the_nile();'>            <p>DEATH ON THE NILE<br>(2022)</p>    </div>  <div class='image-item'>          <a href='/spark/kings_man.html'><img src='/images/movie-8.png' onclick='kings_man()' > </a>           <p>KING'S MAN<br>(2021)</p>        </div>        <div class='image-item'>           <a href='/spark/money_heist_s5.html'><img src='/images/series-4.png' onclick='money_heist_sfive()' ></a>           <p>MONEY HEIST<br>(SEASON 5)<br>(2021)</p>        </div><div class='image-item'>            <a href='/spark/free_guy.html'><img src='/images/movie-4.png' onclick='free_guy();' ></a>            <p>FREE GUY <br>(2021)</p></div></div>";



document.getElementById("bollywood").innerHTML="<div id='gallery' class='gallery'>    <!--2025--> <div class='image-item'>            <img src='/bollywood-/dhanak.png' alt='DHANAK' onclick='dhanak();'> <p>DHANAK<BR>(2015)</p></div>  	  <div class='image-item'>            <img src='/bollywood-/thedaysoftafree.png' alt='THE DAYS OF TAFREE' onclick='thedaysoftafree();'> <p>THE DAYS OF TAFREE<BR>(2016)</p>        </div> <div class='image-item'>            <img src='/bollywood-/zora.png' alt='zora' onclick='zora();'> <p>ZORA <BR>(2025)</p>        </div>	                                                                   <div class='image-item'>            <img src='/images/jaat_poster.png' alt='jaat' onclick='jaat();'> <p>JAAT <BR>(2025)</p>        </div>	                       <div class='image-item'>            <img src='/images/sikandar_poster.png' alt='sikandar' onclick='sikandar();'> <p>SIKANDAR<br>(2025)</p>   </div>   </div>";


document.getElementById("south").innerHTML="<div id='gallery' class='gallery'>    <!--2025-->	                                                                                                     <div class='image-item'>            <img src='/south/single.png' alt='jaat' onclick='single();'> <p>SINGLE <BR>(2025)</p>        </div>	                                                    <div class='image-item'>            <img src='/south/kgf2.png' alt='KGF 1' onclick='kgf2();'> <p>KGF 2<br>(2022)</p></div>                                                           <div class='image-item'>            <img src='/south/kgf1.png' alt='KGF 1' onclick='kgf1();'> <p>KGF 1<br>(2018)</p>   </div> </div>";
 }
