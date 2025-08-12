document.getElementById("message").innerHTML="<table><tr><td><p id='msg'></p><p id='mess'></p></td><td>&nbsp;&nbsp;&nbsp;</td><td><p id='mail'></p></td><td>&nbsp;&nbsp;&nbsp;</td><td><p id='searchfinder'></p></td></tr></table>";

function finding(){
location.assign("/spark/search.html");
document.getElementById("msg").style.display="none";
document.getElementById("mess").innerHTML="<p style='cursor:pointer;padding:10px; background-color:red;color:white; outline:3px solid white;cursor:pointer;width:50px;height:25px;' id='mess' onclick='off()'>CLOSE</p>";
document.getElementById("mail").style.display="none";
}


function off(){
document.getElementById("mess").style.display="none";
location.reload();
}


document.getElementById("searchfinder").innerHTML="<p style='cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;width:25px;height:25;border-radius:50%;'id='message' onclick='finding()'><embed src='https://spark00001.github.io/images/search.png' style='width:25px;height:25px;'></embed></p>"


document.getElementById("msg").innerHTML="<p style='cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;width:25px;height:25;border-radius:50%;'id='message' onclick='op()'><embed src='https://spark00001.github.io/images/notification.png' style='width:25px;height:25px;'></embed></p>"


document.getElementById("mail").innerHTML="<a href='mailto:tickets@spark-cfcem5.p.tawk.email' id='t1'><p style='cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;width:25px;height:25;border-radius:50%;'id='message'><embed src='https://spark00001.github.io/images/mail.png' style='width:25px;height:25px;'></embed></p></a>";

function op(){
document.getElementById("noti").innerHTML="<p style='cursor:pointer;padding:10px; background-color:red;color:white; outline:3px solid white;cursor:pointer;width:50px;height:25px;' id='message' onclick='cl()'>CLOSE</p><div style='background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);'><p style='background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%); color:black;'>:-) <p  style='background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%); color:black;'id='dt'></p><br><b style='background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%); color:black;'><u>NOTIFICATION:</u></b><br><b style='background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%); color:black;'id='dt'></p><br><b style='background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%); color:black;'>SOME CONTENT MAY NOT SUPPORT ON PC.<BR>BUT ALL THE CONTENT CAN STREAMED ON MOBILE.</b><br> <embed src='https://spark00001.github.io/images/qr.png' style='width:100px;height:100px;' download></embed><br><p style='color:black;'>DONATE US( MIN. Rs. 1)</p><br><table><tr><td><button style='background-color:gold;color:black;outline:5px solid black;'>ABOUT SITE</button></td><td><button style='cursor:pointer;background-color:gold;color:black;outline:5px solid black;'>ABOUT DEVELOPER</td><td><button onclick='chatimg()' style='cursor:pointer;background-color:gold;color:black;outline:5px solid black;'>HOW TO CHAT</td></tr></table></br></p></div>";
document.getElementById("message").style.display="none";
const dt = new Date();
document.getElementById("dt").innerHTML=dt;
}
function cl(){
document.getElementById("noti").innerHTML="<table><tr><td><p style='cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;width:25px;height:25;border-radius:50%;'id='message' onclick='op()'><embed src='https://spark00001.github.io/images/notification.png' style='width:25px;height:25px;'></embed></p></td><td>&nbsp;&nbsp;&nbsp;</td><td><p id='mail1'></p></td><td>&nbsp;&nbsp;&nbsp;</td><td><p style='cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;width:25px;height:25;border-radius:50%;'id='message' onclick='finding()'><embed src='https://spark00001.github.io/images/search.png' style='width:25px;height:25px;'></embed></p></td></tr></table>";
document.getElementById("mail1").innerHTML="<a href='mailto:s20512165@gmail.com'><p style='cursor:pointer;padding:10px;background-color:gold;color:black; outline:3px solid red;width:25px;height:25;border-radius:50%;'id='message'><embed src='https://spark00001.github.io/images/mail.png' style='width:25px;height:25px;'></embed></p></a>";
}
function chatimg(){
document.getElementById("noti").innerHTML="<p style='cursor:pointer;padding:10px; background-color:red;color:black; outline:3px solid white;cursor:pointer;' id='message' onclick='cl()'>CLOSE NOTIFICATION &#8657</p><br><button onclick='op()' style='cursor:pointer;background-color:gold;color:black;outline:5px solid black;'>&#8656; PREVIOUS PAGE</button><br><embed src='https://spark00001.github.io/images/chat.png' style='width:99%;height:400px;'></embed><br><table><tr><td><button style='background-color:gold;color:black;outline:5px solid black;'>ABOUT SITE</button></td><td><button style='cursor:pointer;background-color:gold;color:black;outline:5px solid black;'>ABOUT DEVELOPER</td><td><button onclick='chatimg()' style='cursor:pointer;background-color:gold;color:black;outline:5px solid black;'>HOW TO CHAT</button></td></tr></table>";
}
