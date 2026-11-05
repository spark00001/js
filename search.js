var sysoutput = "";
function searchdb(){
var search = document.getElementById("usrsearch").value;
switch(search.toLowerCase().trim()){
case "baththa":
sysoutput = baththajs();
document.getElementById("export").innerHTML=sysoutput;
break;
case "adam project":
sysoutput = adamprojectjs();
document.getElementById("export").innerHTML=sysoutput;
break;
  case "":
sysoutput = livetvview();
document.getElementById("export").innerHTML=sysoutput;
break;
default:
sysoutput = livetvview();
document.getElementById("export").innerHTML=sysoutput;
break;
}
}
