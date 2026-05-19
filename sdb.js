function sdb(){
var querry=document.getElementById("usrquerry").value;

if(querry.toLowerCase() == "when life gives you tangerines"){
location.assign("/spark/whenlifegivesyoutangerines.html");
}
else{
document.getElementById("throwout").innerHTML="not found";
}
}
