document.getElementById("message").innerHTML="<p style='cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;'id='message' onclick='op()'>OPEN NOTIFICATION &#8659 </p>";
function op(){
document.getElementById("noti").innerHTML="<p style='cursor:pointer;padding:10px; background-color:red;color:black; outline:3px solid white;cursor:pointer;' id='message' onclick='cl()'>CLOSE NOTIFICATION &#8657</p><p style='background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%); color:black;'>:-)<br><b><u>NOTIFICATION:</u></b><br>ENJOY WITH OUR STREAMING SERVICES.<BR>ALL CONTENT ARE AVAILABLE FOR FREE OF COST.<BR>IT IS COMPLETELY AD FREE.<br><table><tr><td><button style='background-color:gold;color:black;outline:5px solid black;'>ABOUT SITE</button></td><td><button style='background-color:gold;color:black;outline:5px solid black;'>ABOUT DEVELOPER</td></tr></table></br></p>";
document.getElementById("message").style.display="none";
}
function cl(){
document.getElementById("noti").innerHTML="<p style=' cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;' id='message' onclick='op()'>OPEN NOTIFICATION &#8659</p>";
}
