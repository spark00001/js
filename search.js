function srch(){
var  inpt = document.getElementById("sr").value;
if(inpt.toLowerCase() == "sonic 2"){
document.getElementById("srout").innerHTML="<table><tr><td><embed src='/images/movie-1.png' width='150'height='200' onclick='sonic2();'></embed></td></tr><tr><td>SONIC 2</td></tr></table>";
}
if(inpt.toLowerCase() == "sonic"){
document.getElementById("srout").innerHTML="<table><tr><td><embed src='/images/movie-1.png' width='150'height='200' onclick='sonic2();'></embed></td></tr><tr><td>SONIC 2</td></tr></table>";
}
if(inpt.toLowerCase() == "free guy"){
document.getElementById("srout").innerHTML="<table><tr><td><embed src='/images/movie-4.png' width='150'height='200'></embed></td></tr><tr><td>SONIC 2</td></tr></table>";
}
}
function sonic2(){
location.assign("/spark/sonic2.html");
}
