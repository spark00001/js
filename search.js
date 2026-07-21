function searchdb(){
var search = document.getElementById("usrsearch").value;
switch(search.toLowerCase()){
case "adam project":
sysoutput = "<!--<div class='image-item'><img src='/images/movie-3.png' onclick='adam_project();'><p>ADAM PROJECT<br>(2022)</p></div>--><div id='adamproject'></div>";
break;
default:
sysoutput ="<div id='notfound'>Not Found</div>";
break;
}
document.getElementById("exportsearch").innerHTML=sysoutput;
}
