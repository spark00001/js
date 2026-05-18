function sdb(){
var querry=document.getElementById("usrquerry").value;

if(querry.toLowerCase() == "when life gives you tangeries"){
location.assign("/spark/whenlifegivesyoutangeriesall.html");
}
else{
document.getElementByid("throwout").innerHTML="not found";
}
}
