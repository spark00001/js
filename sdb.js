function sdb(){
var querry=document.getElementById("usrquerry").value;

if(querry.toLowerCase() == "when life gives you tangeries"){
location.assign("/spark/whenlifegivesyoutangeriesall.html");
}
else{
document.getElementById("throwout").innerHTML="not found";
}
}
