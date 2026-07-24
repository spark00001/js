var sysoutput = "";
function searchdb(){
var search = document.getElementById("usrsearch").value;
switch(search.toLowerCase().trim()){
case "adam project":
sysoutput = adamprojectjs();
document.getElementById("exportsearch").innerHTML=sysoutput;
break;
default:
searchdatabase(); // Handles innerHTML assignment on its own
break;
}
}
