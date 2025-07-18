document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>WEBSERIES</b><br><br><p id='webseries'></p><br>       <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='south'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='bollywood'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b> <br><br>       <!--2022--><p id='hollywood'></p><br>";

function language(){
var lang = document.getElementById("genere").value;
if(lang == "all"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br>       <b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='south'></p><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='bollywood'></p><br><br><b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b> <br><br>       <!--2022--><p id='hollywood'></p><br>";
}
if(lang == "webseries"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>WEBSERIES</b><br><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";


document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";
} 

if(lang == "punjabi"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>PUNJABI</b><br><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";
document.getElementById("south").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("hollywood").style.display="none";
document.getElementById("webseries").style.display="none";
}
if(lang == "south"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>SOUTH</b><br><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywood'></p><br><p id='hollywood'></p>";

document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("hollywood").style.display="none";
document.getElementById("webseries").style.display="none";
}
if(lang == "bollywood"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>BOLLYWOOD</b><br><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywoodmain'></p><br><p id='hollywood'></p>";
const bollywood = setaTimeout(bollywood,100)
;
document.getElementById("home").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("hollywood").style.display="none";
document.getElementById("webseries").style.display="none";
}
if(lang == "hollywood"){
document.getElementById("all").innerHTML="<b style='color:gold;width:99%;height:60px;border:1px solid gold;padding:10px;'>HOLLYWOOD</b><br><br><p id='home'></p><br><p id='webseries'></p><br><p id='south'></p><br><p id='bollywoodmain'></p><br><p id='hollywood'></p>";


document.getElementById("home").style.display="none";
document.getElementById("bollywood").style.display="none";
document.getElementById("south").style.display="none";
document.getElementById("webseries").style.display="none";
} 

