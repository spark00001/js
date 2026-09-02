var sysoutput = "";
function searchdb(){
var search = document.getElementById("usrsearch").value;
switch(search.toLowerCase().trim()){
case "adam project":
sysoutput = adamprojectjs();
document.getElementById("exportsearch").innerHTML=sysoutput;
document.getElementById("export").style.display="none";
break;
default:
 livetvview();
break;
}
}
